import List "mo:core/List";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Iter "mo:core/Iter";

actor {
  type Product = {
    id : Nat;
    name : Text;
    description : Text;
    price : Nat;
    category : Text;
    imageUrl : Text;
    isFeatured : Bool;
  };

  type Inquiry = {
    name : Text;
    phone : Text;
    message : Text;
    productName : Text;
  };

  // Static product list
  let products : [Product] = [
    {
      id = 1;
      name = "Rein Dear Sunglasses";
      description = "Premium sunglasses with UV protection.";
      price = 15000;
      category = "Accessories";
      imageUrl = "https://example.com/sunglasses.jpg";
      isFeatured = true;
    },
    {
      id = 2;
      name = "Money Bag";
      description = "Stylish money bag for everyday use.";
      price = 8000;
      category = "Bags";
      imageUrl = "https://example.com/moneybag.jpg";
      isFeatured = false;
    },
    {
      id = 3;
      name = "Luxury Diary";
      description = "High-quality diary for professionals.";
      price = 1200;
      category = "Stationery";
      imageUrl = "https://example.com/diary.jpg";
      isFeatured = true;
    },
    {
      id = 4;
      name = "Premium Pen";
      description = "Smooth writing experience with premium design.";
      price = 600;
      category = "Stationery";
      imageUrl = "https://example.com/pen.jpg";
      isFeatured = false;
    },
    {
      id = 5;
      name = "Luxury Watch";
      description = "Elegant watch with modern features.";
      price = 25000;
      category = "Accessories";
      imageUrl = "https://example.com/watch.jpg";
      isFeatured = true;
    },
  ];

  let inquiries = List.empty<Inquiry>();

  // Public methods

  public query ({ caller }) func getAllProducts() : async [Product] {
    products;
  };

  public query ({ caller }) func getProductById(id : Nat) : async Product {
    switch (products.find(func(p) { p.id == id })) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };
  };

  public query ({ caller }) func getProductsByCategory(category : Text) : async [Product] {
    products.filter(func(p) { Text.equal(p.category, category) });
  };

  public query ({ caller }) func getFeaturedProducts() : async [Product] {
    products.filter(func(p) { p.isFeatured });
  };

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, message : Text, productName : Text) : async () {
    let inquiry : Inquiry = {
      name;
      phone;
      message;
      productName;
    };
    inquiries.add(inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.toArray();
  };
};
