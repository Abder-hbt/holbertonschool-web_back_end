#!/usr/bin/env python3
""" Write a Python function that returns the list of school having a specific topic """


def schools_by_topic(mongo_collection, topic):
    """ Method that returns list of school with specific topic """
    return mongo_collection.find({"topics": topic})
