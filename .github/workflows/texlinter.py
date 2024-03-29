#!/usr/bin/env python3

import os
import sys
import glob

white_list = ["eg", "i.e", "etc", "e.g"]

path = os.path.dirname(os.path.realpath(__file__)) + '/report/*/**/*.tex'

if len(sys.argv) > 1:
    path = os.path.dirname(os.path.realpath(__file__)) + '/' + sys.argv[1] + '*/**/*.tex'

def get_tex_lines():
    for file in glob.iglob(path, recursive=True):
        with open(file) as f:
            if f.name.endswith("config.tex") or f.name.endswith("preamb.tex"):
                continue
            for line in f.readlines():
                yield (line, f.name)

def check_line(line, initial = True):
    parts = line.strip().split(". ")
    if line.startswith("%"):
        return True
    if len(parts) == 1:
        return True if (initial or "." not in parts[0]) else any(parts[0][:-1].endswith(x) for x in white_list)

    newLine = ". ".join(parts[:-1])
    for x in white_list:
        if newLine.endswith(x):
            return check_line(newLine[:-len(x)], False)
    return False

result = True
for line in get_tex_lines():
    if not check_line(line[0]):
        print("In file:", line[1])
        print("Illegal line:", line[0])
        result = False

exit(0) if result else exit(1)
