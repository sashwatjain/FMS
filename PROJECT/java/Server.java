import java.util.HashMap;
import java.util.Map;

import spark.Request;
import spark.Response;
import spark.Route;

import com.google.gson.Gson;

public class Server {

    private static Map<String, UserData> users = new HashMap<>();

    public static void main(String[] args) {
        // Set up the server
        // ...

        // For demonstration purposes, let's add some pre-defined users
        users.put("john123", new UserData("John Doe", "EMI123456789", "$5000", new String[]{"Laptop", "TV"}));
        users.put("emma456", new UserData("Emma Smith", "EMI987654321", "$3000", new String[]{"Smartphone", "Fitness Tracker"}));

        // Register routes for handling AJAX requests
        spark.Spark.post("/fetchUserData", fetchUserDataRoute);
        spark.Spark.post("/fetchPurchasedProducts", fetchPurchasedProductsRoute);
        spark.Spark.post("/buyProduct", buyProductRoute);
    }

    private static Route fetchUserDataRoute = (Request request, Response response) -> {
        String userName = request.queryParams("username");
        UserData userData = users.get(userName);
        if (userData != null) {
            response.type("application/json");
            return new Gson().toJson(userData);
        } else {
            response.status(404);
            return "User not found";
        }
    };

    private static Route fetchPurchasedProductsRoute = (Request request, Response response) -> {
        String userName = request.queryParams("username");
        UserData userData = users.get(userName);
        if (userData != null) {
            response.type("application/json");
            return new Gson().toJson(new PurchasedProducts(userData.getProducts()));
        } else {
            response.status(404);
            return "User not found";
        }
    };

    private static Route buyProductRoute = (Request request, Response response) -> {
        String userName = request.queryParams("username");
        String productName = request.queryParams("productName");
        String productCost = request.queryParams("productCost");
        String emiScheme = request.queryParams("emiScheme");

        // Process the product purchase and update the user data (in a real application, store the data in the database)
        UserData userData = users.get(userName);
        if (userData != null) {
            userData.addProduct(productName);
            // In a real application, you would update the remaining balance and EMI card details based on the purchase.
            // For this example, we are not modifying these fields.

            response.type("application/json");
            return new Gson().toJson(new ResponseMessage("Product purchased successfully."));
        } else {
            response.status(404);
            return "User not found";
        }
    }

    // Define UserData and PurchasedProducts classes (similar to your previous implementation)
    // ...

    // Define ResponseMessage class for sending success messages in JSON format
    private static class ResponseMessage {
        private String message;

        public ResponseMessage(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }
    }
}
