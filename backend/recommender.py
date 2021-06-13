
from __future__ import annotations
import numpy as np
from bidict import bidict
from pprint import pprint
from typing import Iterable

# functions
def rev_hamming_dist(x: Iterable, y: Iterable):
    """Computes reverse hamming distances between two iterables"""
    if len(x) != len(y):
        raise ValueError('Iterable lengths are not equal.')

    return np.sum(a=[int(x[i] == y[i]) for i in np.arange(len(x))], axis=None)

def recommend_top_k(user_idx: int, k: int=5, limit: int=None):
    """Recommend locations from the top k closest users from given user by index, optional limit for number of locations"""
    # descending sorted indexes of hamming distances between given user and all other users
    idx_desc = np.argsort(a=-rev_hamming[user_idx], axis=None)

    if __debug__:
        print(idx_desc)

    old_locations = set(np.argwhere(a=visits[user_idx] == 1).flatten())
    recommended_locations = set()
    for u_idx in idx_desc[1 : np.minimum(len(users), k)]:
        # new recommendations for locations to visit
        rec = set(np.argwhere(a=visits[u_idx] == 1).flatten()).difference(old_locations).difference(recommended_locations)
        if __debug__:
            print(rec)

        if limit is None or len(recommended_locations) + len(rec) < limit:
            recommended_locations.update(rec)
        else:
            break

    return np.asarray(a=list(recommended_locations))

# important variables
users = bidict()
locations = bidict()

for user in np.asarray(a=['Adam', 'Aiden', 'Ashley', 'Bailey', 'Barney', 'Caleb', 'Danny', 'George', 'Harry', 'Isaac', 'Jack', 'Lawrence', 'Phil', 'Tom']):
    users.update({user: len(users) + 1})

for location in np.asarray(a=['Amsterdam', 'Auckland', 'Berlin', 'London', 'Moscow', 'Paris', 'Rome', 'Seoul', 'Shanghai', 'Tokyo']):
    locations.update({location: len(locations) + 1})

# user -> location history of visists
visits = np.zeros(shape=(len(users), len(locations)), dtype=int)
for i in np.arange(len(users)):
    for j in np.arange(len(locations)):
        visits[i, j] = np.random.randint(low=0, high=2)

rev_hamming = np.zeros(shape=tuple([len(users)] * 2), dtype=int)
for i in np.arange(len(users)):
    for j in np.arange(len(users)):
        rev_hamming[i, j] = rev_hamming[j, i] = rev_hamming_dist(visits[i], visits[j])

if __name__ == '__main__':
    pprint('Users:')
    pprint(users)

    pprint('Locations:')
    pprint(locations)

    pprint('Visit history of users:')
    pprint(visits)

    pprint('Reverse Hamming distance between user visit histories:')
    pprint(rev_hamming)

    pprint('Testing rev_hamming_dist function:')
    pprint(rev_hamming_dist([1, 2, 3, 6, 6, 6], [1, 2, 4, 6, 6, 9]))

    name = 'Isaac'
    pprint(f'Recommended locations for {name}:')
    recommended_location_idx = recommend_top_k(user_idx=1)
    pprint(recommended_location_idx)
    pprint([locations.inverse[l_idx] for l_idx in recommended_location_idx])
