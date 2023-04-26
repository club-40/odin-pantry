# Tech Stack

Please see [tech-stack.md](docs/technology-stack.md)

<br><br><br>

# Wireframe & Design

Please see the [wireframe & Design in Figma](https://www.figma.com/file/mMOCYJVD8S05kjAK3ev3dR/Wire-frame?node-id=0-1&t=uqEkW96JMTLRbsE8-0)

<br><br><br>

# Project Architecture

## Overview

The pantry app allows users to track your grocery needs list and share it with users. Scan using barcodes and maintain a list of your existing products.

## Goals

Create an app that serves as a digital inventory of what users have available in their pantry
Food items will be accounted for by the user from their pantry, and removed by the user when expired.
Allows user to see what food items are currently available in stock
Helps plan for recipes without the need to over purchase the product
Maintain Expiration date and maybe tips on storage for longer shelf life
Helps in saving money and better planning for recipes

## Features ( MVP )

- Log In / Log Out ( OAUTH - optional )
- User Profile section
- Notifications, Product Rotations
- User privileges for pantry based on user creation, join or invitation
- Create a pantry
- Join a pantry ( Send out a request to another to join an existing pantry. If that other is an existing member, it should be reflected in the app. Otherwise, an email I guess)
- Invite to an existing pantry
- Unsubscribe from a pantry
- Delete a pantry
- View all pantries
- Add items to pantryI
- Remove Items from pantry
- Update Items from pantry
- View Items in subscribed pantries
- Alert close to expiration date
- Search Features
- Sub Categories for example Spices, Vegetables, Snacks, Drinks
- Smart list of expiring items pushed to top
- Filter products in pantries
- Create recipes based on existing items available on the pantry
- Estimated best by dates if not available through the API
- Current market pricing indicator if available through API for the product

## Extension Ideas (After MVP)

- Timelines to show history of products, spending etc
- Budgeting Calculator to show spending on food
- Rating and comments on other pantries
- Push Notifications ( if mobile )
- Barcode scanner ( Mobile App )
- Show consumption of products
- Show Recipes
