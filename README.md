# A2Z eCommerce

A2Z eCommerce is a full-featured eCommerce application built using React, Redux Toolkit, and Tailwind CSS, following the MVC architecture. The application includes two panels: an admin panel and a user panel. Users can browse and order products, while admins can update and view ordered products.

## Features

- **User Panel**:
  - Browse products
  - Order products
  - View order history

- **Admin Panel**:
  - Update products
  - View all ordered products

## Technologies Used

- **Frontend**: React, Redux Toolkit, Tailwind CSS
- **Architecture**: MVC (Model-View-Controller)
- **State Management**: Redux Toolkit

## Installation

Follow these steps to set up the project on your local machine.

### Prerequisites

- Node.js and npm installed
- Git installed

### Clone the Repository

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/a2z-ecommerce.git
    cd a2z-ecommerce
    ```

### Install Dependencies

1. Navigate to the project directory:
    ```sh
    cd a2z-ecommerce
    ```

2. Install frontend dependencies:
    ```sh
    npm install
    ```

### Environment Setup

1. Create a `.env` file in the root directory.
2. Add the necessary environment variables:
    ```env
    REACT_APP_API_URL=your_api_url
    ```

### Running the Application

1. Start the development server:
    ```sh
    npm start
    ```

2. Open your browser and go to `http://localhost:3000`.

## Project Structure

- `src/`
  - `components/` - Reusable components
  - `features/` - Redux slices
  - `pages/` - Admin and User pages
  - `services/` - API services
  - `styles/` - Tailwind CSS configurations
  - `utils/` - Utility functions

## Usage

### User Panel

1. Register or log in to the application.
2. Browse the product catalog.
3. Add products to the cart and place an order.
4. View your order history.

### Admin Panel

1. Log in to the admin panel.
2. View all ordered products.
3. Update product details and manage inventory.


## Acknowledgments

- Thanks to the React, Redux Toolkit, and Tailwind CSS communities for their excellent documentation and support.
