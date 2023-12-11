rm(list=ls())
cat("\014")

# Import required libraries
library(httr)
library(jsonlite)
library(dplyr)
library(stringr)
library(tidyr)
library(jsonlite)

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

# data processing and Spotify API interaction code 
#load json file
json_data <- fromJSON("~/Documents/BookishMelodiesJS/r/testdata.json")
# extract docs column
docs_data <- json_data$docs
# create dataframe
df <- as.data.frame(docs_data)
#extract subjects
subjects <-data.frame(column = tolower(unlist(df$subject)))
# make subjects into a list
words_list <- unlist(subjects)
# create table
word_freq <- table(words_list)
# create data frame of word frequencies
word_freq_df <- as.data.frame(word_freq)
# sort by frequency
df_sorted <- word_freq_df[order(-word_freq_df$Freq), ]
# clean irrelevant data
df_clean <- df_sorted[!grepl("fiction|nonfiction|children|bestseller|reading|spanish", df_sorted$words_list, ignore.case = TRUE), ]
# isolate just first 5 rows
df_first5 <- df_clean[1:5, ]
print(df_first5)

# Example: Print the received data (You should replace this with your actual processing and API calls)


# Don't forget to handle error scenarios and ensure your R script is robust against various types of input.
