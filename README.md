problem statement:https://drive.google.com/drive/u/0/folders/1UwplcfCo8O_kTFxPw1FnvmAbrHbSA3a6  
User Flow : https://drive.google.com/drive/u/0/folders/1UwplcfCo8O_kTFxPw1FnvmAbrHbSA3a6  
wireflow:https://drive.google.com/drive/u/0/folders/1UwplcfCo8O_kTFxPw1FnvmAbrHbSA3a6  

# coffee shop 
# user crud  
 1.create login  
 2.create signup  
 3.create profile  
 4.read profile  
 5.update profile  
 6.delete profile  
 7.logout user  
 # product crud  
 1.create product  
 2.read product  
 3.update product  
 4.product detail
 # cart
 1.Add products to the cart  
 2.Read product cart  
 3.Remove product from cart  
 4.Update from cart   
# my order 
1.create order  
2.read order  
3.delete order  
# review
1.create reviews  
2.read reviews  
3.update reviews   


## Buyer
# Register page
Scenario 1: Successfully create an account
Steps:
1.To navigate to the registration page.
2.You have to click the login button and there will be a sign up option. 
3. Enter the required information such as name, email,phone_number and password.
4. Click the "Sign up" button.
Expected Result:
1. The user is redirected to the Login page.0
01
# Login page
Scenario 1: Successfully login in to account
Steps:
1. Navigate to the login page by clicking the login button.
2. Enter the required information such as email and password.
3. Click the "login" button.
Expected Result:
1. The user is redirected to the home page.0
01
2. User profile created.
# View profile details
Scenario 1: Successfully view account details
Steps:
1. You are already logged  in as a buyer.
2. Navigate to the profile page through the profile icon.
3. View the profile details such as name, email,phone_number and password.
Expected Result:
1. The user can view their profile details.
(01)
# Edit profile details
Scenario 1: Successfully edit profile details
Steps:
1. You are already logged  in as a buyer
2. Navigate to the profile page through the profile icon.
3. Click the "Edit profile" button.
4. Update the account details.
5. Click the "Save" button.
Expected Result:
1. The user's profile details are updated.
(01)
# Logout  profile details
1. Navigate to the profile page through the profile icon.
2. Click the "Log out" button.
3. You are logged out as a user.

# View categories and their respective products
Scenario 1: Successfully view Category&products
Steps:
1. You are logged in as a user.
2. Navigate to the product listing page by clicking the order button on the nav bar. 
3. View the list of available product in their respective category in the webpage.
Expected Result:
1. The user can view the list of available category and products.
# Add products to cart
Scenario 1: Successfully add category&products to cart.
Steps:
1. You are logged in as a user.
2. Navigate to the product listing page.
3. Select a product  from the category of your wish to view its product detail.
4. So that , you can choose any one of  the  three  quantities to buy.
5. Select one of the price/quantity.
6. Then , click the "Add to Cart" button.
7. You will be directed to add to cart page.
Expected Result:
1. The product is added to the user's cart.
# View products in the cart
Scenario 1: Successfully view product in the cart.
Steps:
1. You are logged in as a user.
2. Navigate to the cart page through the cart icon in the nav bar.
3. View the list of selected product in the cart.
4. You can increase the quantity of the product , if you want to.
Expected Result:
1. The user can view the list of selected products in the cart and they can increase the prices as much as they want.
# Remove products from the cart
Scenario 1: Successfully remove Menu/Category from cart.
Steps:
1. You are logged in as a user.
2. Navigate to the cart page through the cart icon in the nav bar.
3. Remove the selected products from the cart that you dont need.
Expected Result:
1. The product is removed from the user's cart.

# Buy products from the cart
Scenario 1: Successfully purchase a product
Steps:
1. You are logged in as a user.
2. Navigate to the cart page through the cart icon in the nav bar.
3. Select required products to order.
4. Choose the mode of delivery.
5.Enter the Delivery address. Change the delivery address if you want to.
6. Click the "place your order" button.
Expected Result:
1. The Order is placed.
2. The user is redirected to the my orders page.
An order confirmation email is sent to the user's email address.(not completed)

# View list of orders and order details
Scenario 1: Successfully view list of orders.
Steps:
1. You are logged in as a user.
2. Navigate to the My orders page through the my orders link in the nav bar.
3. View the list of orders and order details of the respective orders.
3. The product will be delivered after 30 mins ,So the user can cancel the order before the given time.
Expected Result:
1. The buyer can view the list of orders and the details of the orders.
# reorder the product
Scenario 1: Successfully reorder the product.
Steps:
1. You are logged in as a user.
2. Navigate to the My orders page through the my orders link in the nav bar.
3. Select an ordered product to reorder, if you wish to.
4. Click the "reorder" button.
Expected Result:
1. The buyer can reorder the product.
2. The user is redirected to the cart page.
# Cancel order
Scenario 1: Successfully cancel order.
Steps:
1. You are logged in as a user.
2. Navigate to the My orders page through the my orders link in the nav bar.
3. Select an order to cancel.
4. Click the "Cancel" button.
Expected Result:
1. The buyer can cancel the order.

## Seller
# Register page(not completed)
# Login page(not completed)
# View profile details(not completed)
# Edit profile details(not completed)
# Logout  profile details(not completed)
# add new product to sell : 
Scenario 1: Successfully uploaded the new product (error)
Steps :
1. Login as a seller.
2. Navigate to the My products page to 3. Add the new product/item.
4. Enter the required product/item details such as name, price, description, and stock information.
5. Click "Add products" button to  upload the new product/item.
Expected result :
The new product is created and added to the seller's list as well as product's list  of products.
# view the list of products : 
Scenario 1: Successfully view list of products (error)
Steps :
1. Login as a seller.
2. Navigate to the productlist page.
3. View the list of products and its detail.
Expected result :
1. The seller can view the list of products and its detail.
# edit the product details : 
Scenario 1: Successfully edit the product details (error)
Steps :
1. Login as a seller.
2. Navigate to the products page.
3. Select a product to edit.
4. Click the "update" button.
5. Update the product details.
6. Click the "Save" button to update the product details.
Expected result:
1. The product details are updated.
# delete the product : (error)
Scenario 1: Update: Successfully deleted the product
Steps :
1. Login as a seller.
2. Navigate to the products page.
3. Select the product to delete.
4. Click the "Delete" button to delete the selected product.
Expected result :
1. The product is deleted from the products page.

 ADD AND REMOVE THE PRODUCT FROM USER PAGE WITHOUT DELETING PRODUCT FROM SELLER PAGE (NOT COMPLETED)

