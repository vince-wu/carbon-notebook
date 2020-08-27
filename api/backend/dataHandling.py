from pathlib import Path
from re import search, escape
from subprocess import call
import os, sys
import pyrsync2
from shutil import copyfile

from api import models


def getFigures(id):
    formula = models.Samples.query.filter_by(id=id).first().formula
    if formula:
        alias = id.replace(id.split('-')[0], formula)
    else:
        alias = None
    print(alias)
    baseDir = '/images/'
    d = Path(__file__).resolve().parents[2]
    refinementDir = d / 'public' / 'images' / 'refinements'
    electrochemDir = d / 'public' / 'images' / 'electrochem'

    refinements = [x.name for x in refinementDir.glob('**/*')]
    electrochem = [x.name for x in electrochemDir.glob('**/*')]
    
    refinementsList = [baseDir + 'refinements/' + name for name in refinements if id in name or (alias and alias in name)]
    electrochemList = [baseDir + 'electrochem/' + name for name in electrochem if id in name or (alias and alias in name)]
    return refinementsList + electrochemList


def getAllData(id):
    updateDataLinks()
    datasets = models.DataLinks.query.all()
    for dataset in datasets:
        getDataSet(id, dataset.name, dataset.dataType)

def getDataSet(id, datasetName, dataType):
    formula = models.Samples.query.filter_by(id=id).first().formula
    if formula:
       alias = id.replace(id.split('-')[0], formula)
    else:
        alias = None
    baseDir =Path(__file__).resolve().parents[2] / 'public' / 'data' 
    if dataType == 'Image':
        dataDir = baseDir / datasetName
        images = [x.name for x in dataDir.glob('**/*')]
        imageLinks = [baseDir + '/' + name]
    return [datasetName, imageLinks]

def updateDataLinks():
    datasets = models.DataLinks.query.all()
    for dataset in datasets:
        src_dir = dataset.directoryPath
        name = dataset.name
        scriptPath = dataset.scriptPath
        linkData(name, src_dir, scriptPath)

def linkData(datasetName, dirPath, scriptPath):
    # Create folder that stores a copy of linked data 
    baseDir = Path(__file__).resolve().parents[2] / 'public' / 'data'
    dataDir = baseDir / datasetName
    if not Path.exists(baseDir / datasetName):
        Path.mkdir(dataDir)

    # print('data: ', dataDir)

    dataFiles = list(Path(dirPath).glob('**/*'))
    for file in dataFiles:
        # print(file)
        copyFile = dataDir / Path(file).name 
        # print('copyFile: ',copyFile)
        if not copyFile.exists():
            copyfile(file, copyFile)
        else:
            # print(file, '\n',copyFile)
            syncFile(file, copyFile)
    

def syncFile(srcFile, dstFile):
    unpatched = open(dstFile, 'rb')
    hashes = pyrsync2.blockchecksums(unpatched)
    patchedFile = open(srcFile, 'rb')
    delta = pyrsync2.rsyncdelta(patchedFile, hashes)
    unpatched.seek(0)
    save_to = open(dstFile, 'wb')
    pyrsync2.patchstream(unpatched, save_to, delta)

# linkData('test', "D:/Clement Research/Test", "")