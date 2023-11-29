rm(list=ls())
cat("\014")

# Import required libraries
library(httr)
library(jsonlite)
library(dplyr)
library(stringr)
library(tidyr)

dataJson <- fromJSON(~/testdata.json)
print(dataJson)

# Function to read data from the file provided by the Express server
# readData <- function(filePath) {
  # dataJson <- fromJSON(filePath)
 #  list(bookData = dataJson$bookData, spotifyToken = dataJson$spotifyToken)
  # print(dataJson)
# }

# Main execution starts here
args <- commandArgs(trailingOnly = TRUE)
if (length(args) == 0) {
  stop("No file path provided")
}

filePath <- args[1]
data <- readData(filePath)

# Extracted data
bookData <- data$bookData
spotifyToken <- data$spotifyToken

# Your data processing and Spotify API interaction code goes here
# ...

# Example: Print the received data (You should replace this with your actual processing and API calls)
print(bookData)
print(spotifyToken)

# Don't forget to handle error scenarios and ensure your R script is robust against various types of input.
