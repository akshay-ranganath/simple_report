# Simple Report
A simple NodeJS based script to generate resource list on Cloudinary.

## Installation

### Step 1
Clone the repository

    git clone https://github.com/akshay-ranganath/simple_report

### Step 2
Change to the directory and install dependencies

    yarn install OR
    npm i

### Step 3
Set up Cloudinary credentials. For this you will need to login to Cloudinary and copy the `CLOUDINARY_URL` parameter. Save this value under a file named `.env`. The file contents will look as follows:
    
    CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud-name

This should complete the setup.

## Usage

To create the report, simply run the command:

    node index.js > <report_file.csv>

The output will be of the following format:

| File Name | Type | Resource Type | Creation Date | URL |
| --------- | ---- | ------------- | ------------- | --- |
| sample | upload | image | 02/01/2021 | https://res.cloudinary.com/demo/sample |

