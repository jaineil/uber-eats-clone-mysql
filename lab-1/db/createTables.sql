-- verify the datatypes as per your needs 
-- have not added columns for images and cuisine types, can verify and add them

CREATE TABLE CUSTOMER (
  ID INTEGER AUTO_INCREMENT PRIMARY KEY,
  USERNAME VARCHAR(30) UNIQUE NOT NULL, 
	FNAME VARCHAR(25) NOT NULL, 
	LNAME VARCHAR2(25) NOT NULL,
	DOB DATE,
	NICKNAME VARCHAR(25),
	EMAIL_ID VARCHAR(50),
	CONTACT_NUMBER VARCHAR(10),
	ADDRESS_ID INTEGER NOT NULL,
  FOREIGN KEY (ADDRESS_ID) REFERENCES ADDRESS(ID)
);

CREATE TABLE FAVOURITE_RESTAURANT (
  CUSTOMER_ID INTEGER NOT NULL,
  RESTAURANT_ID INTEGER NOT NULL,
  PRIMARY KEY (CUSTOMER_ID, RESTAURANT_ID),
  FOREIGN KEY (RESTAURANT_ID) REFERENCES RESTAURANT(ID),
  FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMER(ID)
);

CREATE TABLE RESTAURANT (
  ID INTEGER AUTO_INCREMENT PRIMARY KEY,
  NAME VARCHAR(25) NOT NULL,
  DESCRIPTION TEXT NOT NULL, 
  CONTACT_NUMBER VARCHAR(10) NOT NULL,
  OPENS_AT DATE NOT NULL,
  CLOSES_AT DATE NOT NULL,
  DELIVERY_OPTION INTEGER,
  ADDRESS_ID INTEGER NOT NULL,
  FOREIGN KEY (ADDRESS_ID) REFERENCES ADDRESS(ID)
);

CREATE TABLE ADDRESS (
  ID INTEGER AUTO_INCREMENT PRIMARY KEY,
  HOUSE_NUMBER VARCHAR(25) NOT NULL,
  STREET VARCHAR(25) NOT NULL,
  CITY VARCHAR(25) NOT NULL,
  STATE VARCHAR(25) NOT NULL,
  COUNTRY VARCHAR(25) NOT NULL,
  PINCODE VARCHAR(6) NOT NULL,
  ADDRESS_TYPE VARCHAR(10)
);

CREATE TABLE CUSTOMER_ADDRESS (
  CUSTOMER_ID INTEGER,
  ADDRESS_ID INTEGER,
  PRIMARY KEY (CUSTOMER_ID, ADDRESS_ID),
  FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMER(ID),
  FOREIGN KEY (ADDRESS_ID) REFERENCES ADDRESS(ID)
);

CREATE TABLE ITEM (
  ID INTEGER AUTO_INCREMENT PRIMARY KEY,
  RESTAURANT_ID INTEGER NOT NULL,
  NAME VARCHAR(25) NOT NULL,
  DESCRIPTION TEXT NOT NULL, 
  PRICE INTEGER NOT NULL,
  CATEGORY VARCHAR(25) NOT NULL,
  FOOD_TYPE VARCHAR(25) NOT NULL,
  INGREDIENTS TEXT,
  FOREIGN KEY (RESTAURANT_ID) REFERENCES RESTAURANT(ID)
);

CREATE TABLE BOOK_ORDER (
  ID INTEGER AUTO_INCREMENT PRIMARY KEY,
  RESTAURANT_ID INTEGER NOT NULL,
  CUSTOMER_ID INTEGER NOT NULL,
  STATUS VARCHAR(25) NOT NULL,
  DESCRIPTION TEXT NOT NULL, 
  AMOUNT INTEGER NOT NULL,
  -- the address ids link to the customer address table as foreign key for validation that order can be placed from the addresses registered under that customer only 
  SHIPPING_ADDRESS_ID INTEGER NOT NULL,
  BILLING_ADDRESS_ID INTEGER NOT NULL,
  
  FOREIGN KEY (RESTAURANT_ID) REFERENCES RESTAURANT(ID),
  FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMER(ID),
  FOREIGN KEY (CUSTOMER_ID, SHIPPING_ADDRESS_ID) REFERENCES CUSTOMER_ADDRESS(CUSTOMER_ID, ADDRESS_ID),
  FOREIGN KEY (CUSTOMER_ID, BILLING_ADDRESS_ID) REFERENCES CUSTOMER_ADDRESS(CUSTOMER_ID, ADDRESS_ID)
);

CREATE TABLE ORDER_ITEM (
  ID INTEGER AUTO_INCREMENT PRIMARY KEY,
  ITEM_ID INTEGER NOT NULL,
  ORDER_ID INTEGER NOT NULL,
  FOREIGN KEY (ITEM_ID) REFERENCES ITEM(ID),
  FOREIGN KEY (ORDER_ID) REFERENCES BOOK_ORDER(ID)
);