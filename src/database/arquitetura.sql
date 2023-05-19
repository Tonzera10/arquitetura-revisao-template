-- Active: 1684361290640@@127.0.0.1@3306
CREATE TABLE brands (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT UNIQUE NOT NULL
);

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    brand_id TEXT NOT NULL,
    FOREIGN KEY(brand_id) REFERENCES brands(id)
);
INSERT INTO brands (id, name)
VALUES
    ("b001", "Multilaser"),
    ("b002", "LG"),
    ("b003", "HP");

INSERT INTO products (id, name, price, brand_id)
VALUES
    ("p001", "Mouse", 40.00, "b001"),
    ("p002", "Monitor 25'", 600.00, "b002"),
    ("p003", "Cabo HDMI", 25.00, "b001"),
    ("p004", "Labtop HP", 3450.00, "b003"),
    ("p005", "Smartphone K61", 1300.00, "b002");