# Flush
This is a full-stack E-Commerce application built using **Django REST Framework** for the backend and **ReactJS** for the frontend. The project aims to provide a robust and scalable platform for managing and selling products online. It includes user authentication, product management, cart functionality, and order processing.

Backend - Django REST Framework
The backend of the project is developed using Django and Django REST Framework (DRF) to expose RESTful APIs that interact with the frontend. Key features include:

- **User authentication** with JWT (JSON Web Tokens) for secure login and registration.
- **Product management**: Add, edit, and delete products from the inventory.
- **Cart management**: Allow users to add products to their shopping cart.
- **Order processing**: Users can place orders, and admins can manage the order lifecycle.
- **Payment gateway integration**: Integration with third-party payment services for secure transactions.
- **Database**: A PostgreSQL database to store user information, products, orders, and other critical data.

Frontend - ReactJS
The frontend is built using ReactJS, providing a seamless and interactive user experience. It interacts with the Django backend via API calls. The key features include:

- **Responsive design**: Mobile-friendly interface for both browsing products and managing orders.
- **Product listing and search**: Users can browse, filter, and search for products.
- **Shopping cart**: Add and remove products from the cart with real-time updates.
- **Checkout and payment**: Complete purchase with checkout forms and payment integration.
- **User dashboard**: Manage user profile, view past orders, and track current orders.

Technologies Used

- **Backend**:
  - Django
  - Django REST Framework
  - PostgreSQL
  - JWT for authentication
  - Stripe/PayPal (for payment integration)
  
- **Frontend**:
  - ReactJS
  - Axios for API requests
  - React Router for navigation
  - Bootstrap/Material UI for styling
  
## Features

- **Authentication**: Secure user login, registration, and token-based authentication.
- **Product Management**: View product listings, search, and filter products.
- **Shopping Cart**: Add, remove, and update cart items.
- **Checkout Process**: Secure payment handling and order processing.
- **Order History**: Track past and current orders in the user dashboard.
- **Admin Panel**: Manage users, products, and orders.

Setup Instructions

### Backend (Django)

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run migrations:
   ```bash
   python manage.py migrate
   ```
5. Create a superuser for admin access:
   ```bash
   python manage.py createsuperuser
   ```
6. Start the Django development server:
   ```bash
   python manage.py runserver
   ```

Frontend (React)

1. Navigate to the `frontend` directory.
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
