
# Seir-Seal Project - Capstone

- **Jeff McDonald** (2024-04-13)

- **App Name:** Winfield's
- **Description:** Restaurant/Food Hall/Bar & Events
- **Backend Github URL:** https://github.com/jeffmcd21/backend-capstone
    - **Deployed Backend Website:** 
- **Frontend Github URL:** https://github.com/jeffmcd21/frontend-capstone
    - **Deployed Frontend Website:** 


## List of Dependencies

#####  Bankend (Node js Dependencies)

- bcrypt
- connect-mongo
- dotenv
- ejs
- express
- express-session
- method-override
- mongoose
- morgan

##### Frontend (Vue js Dependencies)

- bootstrap

## Route Map

| Route Name | Endpoint | Method | Decsription |
|------------|----------|--------|-------------|
| Index | / | GET | Home Page |
| About Us | /about | GET | Display info about concept and background |
| Menus | /menu | GET | View list of menus |
| Delete | /menu/selection/:id | DELETE | Remove menu item |
| Update | /menu/selection/:id | PUT | Update a particular menu item then redirect |
| Create | /menu/selection/:id | GET | Add a new menu item to the database then redirect |
| Edit | /menu/selection/:id/edit | POST | Show edit form for one menu item |
| Show | /menu/selection/:id | GET | Show info about one menu item |


## Design Mockups (Mobile & Desktop/ Entity Relationship Diagram)

##### Planning

![Design Mockup](https://i.imgur.com/rQqcC0b.png)
