# Maxsys Website Backend Configuration Guide

This guide provides detailed instructions for configuring the backend systems to make the Maxsys website fully functional.

## Overview

The Maxsys website integrates with two backend systems:
1. **WordPress/FreelanceEngine** (hub.maxsys.org) - Content management and project listings
2. **Laravel HR System** (hrm.maxsys.org) - Human resources and application management

## 1. WordPress/FreelanceEngine Configuration

### Required Plugins
```bash
# Install these WordPress plugins:
- Advanced Custom Fields (ACF) Pro
- WP REST API
- Custom Post Type UI
- WP CORS (for API access)
```

### Custom Post Types Setup

#### Projects Post Type
```php
// Add to functions.php or use Custom Post Type UI
function create_projects_post_type() {
    register_post_type('projects', array(
        'labels' => array(
            'name' => 'Projects',
            'singular_name' => 'Project'
        ),
        'public' => true,
        'show_in_rest' => true,
        'rest_base' => 'projects',
        'supports' => array('title', 'editor', 'excerpt', 'custom-fields')
    ));
}
add_action('init', 'create_projects_post_type');
```

#### Tech Stewards Post Type
```php
function create_tech_stewards_post_type() {
    register_post_type('tech-stewards', array(
        'labels' => array(
            'name' => 'Tech Stewards',
            'singular_name' => 'Tech Steward'
        ),
        'public' => true,
        'show_in_rest' => true,
        'rest_base' => 'tech-stewards',
        'supports' => array('title', 'editor', 'excerpt', 'custom-fields', 'thumbnail')
    ));
}
add_action('init', 'create_tech_stewards_post_type');
```

### Advanced Custom Fields Configuration

#### Projects ACF Fields
```json
{
  "fields": [
    {
      "key": "field_organization",
      "label": "Organization",
      "name": "organization",
      "type": "text",
      "required": 1
    },
    {
      "key": "field_location",
      "label": "Location",
      "name": "location",
      "type": "text",
      "required": 1
    },
    {
      "key": "field_skills_needed",
      "label": "Skills Needed",
      "name": "skills_needed",
      "type": "select",
      "multiple": 1,
      "choices": {
        "Network Security": "Network Security",
        "Data Recovery": "Data Recovery",
        "Cloud Migration": "Cloud Migration",
        "Website Development": "Website Development",
        "Database Management": "Database Management",
        "IT Support": "IT Support",
        "E-waste Disposal": "E-waste Disposal",
        "Digital Training": "Digital Training"
      }
    },
    {
      "key": "field_urgency",
      "label": "Urgency",
      "name": "urgency",
      "type": "select",
      "choices": {
        "low": "Low",
        "medium": "Medium",
        "high": "High"
      },
      "default_value": "medium"
    },
    {
      "key": "field_budget",
      "label": "Budget",
      "name": "budget",
      "type": "text"
    },
    {
      "key": "field_latitude",
      "label": "Latitude",
      "name": "latitude",
      "type": "number"
    },
    {
      "key": "field_longitude",
      "label": "Longitude",
      "name": "longitude",
      "type": "number"
    }
  ],
  "location": [
    [
      {
        "param": "post_type",
        "operator": "==",
        "value": "projects"
      }
    ]
  ]
}
```

#### Tech Stewards ACF Fields
```json
{
  "fields": [
    {
      "key": "field_steward_location",
      "label": "Location",
      "name": "location",
      "type": "text",
      "required": 1
    },
    {
      "key": "field_specialties",
      "label": "Specialties",
      "name": "specialties",
      "type": "select",
      "multiple": 1,
      "choices": {
        "Network Security": "Network Security",
        "Cloud Migration": "Cloud Migration",
        "IT Support": "IT Support",
        "Website Development": "Website Development",
        "Database Management": "Database Management",
        "E-waste Disposal": "E-waste Disposal",
        "Digital Training": "Digital Training"
      }
    },
    {
      "key": "field_rating",
      "label": "Rating",
      "name": "rating",
      "type": "number",
      "min": 1,
      "max": 5,
      "step": 0.1,
      "default_value": 4.5
    },
    {
      "key": "field_reviews_count",
      "label": "Reviews Count",
      "name": "reviews_count",
      "type": "number",
      "min": 0,
      "default_value": 0
    },
    {
      "key": "field_verified",
      "label": "Verified",
      "name": "verified",
      "type": "true_false",
      "default_value": 0
    },
    {
      "key": "field_availability",
      "label": "Availability",
      "name": "availability",
      "type": "text",
      "default_value": "Contact for availability"
    },
    {
      "key": "field_steward_latitude",
      "label": "Latitude",
      "name": "latitude",
      "type": "number"
    },
    {
      "key": "field_steward_longitude",
      "label": "Longitude",
      "name": "longitude",
      "type": "number"
    }
  ],
  "location": [
    [
      {
        "param": "post_type",
        "operator": "==",
        "value": "tech-stewards"
      }
    ]
  ]
}
```

### CORS Configuration
```php
// Add to functions.php
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
}
add_action('init','add_cors_http_header');

// Enable CORS for REST API
function enable_cors_for_api($response) {
    $response->header('Access-Control-Allow-Origin', '*');
    $response->header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    $response->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return $response;
}
add_filter('rest_pre_serve_request', 'enable_cors_for_api');
```

### REST API Endpoints
The following endpoints should be accessible:
- `GET /wp-json/wp/v2/posts` - Blog posts
- `GET /wp-json/wp/v2/projects` - Project listings
- `GET /wp-json/wp/v2/tech-stewards` - Tech steward profiles

## 2. Laravel HR System Configuration

### Required Database Tables

#### Tech Hub Applications
```sql
CREATE TABLE tech_hub_applications (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255),
    location VARCHAR(255) NOT NULL,
    experience TEXT NOT NULL,
    leadership_experience TEXT NOT NULL,
    motivation TEXT NOT NULL,
    veteran_status ENUM('veteran', 'active', 'spouse', 'none'),
    availability ENUM('full-time', 'part-time', 'flexible', 'volunteer'),
    status ENUM('pending', 'reviewing', 'approved', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### E-waste Pickups
```sql
CREATE TABLE ewaste_pickups (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    organization VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    device_types JSON NOT NULL,
    quantity VARCHAR(255),
    pickup_date DATE,
    special_requirements TEXT,
    status ENUM('pending', 'scheduled', 'completed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### Donations
```sql
CREATE TABLE donations (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255),
    amount DECIMAL(10,2) NOT NULL,
    donation_type ENUM('one-time', 'monthly') NOT NULL,
    payment_method VARCHAR(255),
    transaction_id VARCHAR(255),
    stripe_payment_intent_id VARCHAR(255),
    stripe_customer_id VARCHAR(255),
    billing_address JSON,
    status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### Contact Forms
```sql
CREATE TABLE contact_forms (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status ENUM('new', 'read', 'responded') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Laravel API Routes
```php
// routes/api.php
Route::prefix('v1')->group(function () {
    // Tech Hub Applications
    Route::post('/tech-hub-applications', [TechHubController::class, 'store']);
    Route::get('/tech-hubs', [TechHubController::class, 'index']);
    
    // E-waste Pickups
    Route::post('/ewaste-pickups', [EWasteController::class, 'store']);
    
    // Donations
    Route::post('/donations', [DonationController::class, 'store']);
    
    // Contact Forms
    Route::post('/contact', [ContactController::class, 'store']);
});
```

### Laravel Controllers

#### TechHubController
```php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TechHubApplication;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class TechHubController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:255',
            'location' => 'required|string|max:255',
            'experience' => 'required|string',
            'leadership_experience' => 'required|string',
            'motivation' => 'required|string',
            'veteran_status' => 'nullable|in:veteran,active,spouse,none',
            'availability' => 'nullable|in:full-time,part-time,flexible,volunteer'
        ]);

        $application = TechHubApplication::create($validated);

        // Send notification email to admin
        // Mail::to('admin@maxsys.org')->send(new TechHubApplicationReceived($application));

        return response()->json([
            'message' => 'Application submitted successfully',
            'application_id' => $application->id
        ], 201);
    }

    public function index(): JsonResponse
    {
        $hubs = TechHubApplication::where('status', 'approved')->get();
        return response()->json($hubs);
    }
}
```

#### EWasteController
```php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\EWastePickup;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class EWasteController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:255',
            'organization' => 'required|string|max:255',
            'address' => 'required|string',
            'device_types' => 'required|array',
            'quantity' => 'nullable|string|max:255',
            'pickup_date' => 'nullable|date',
            'special_requirements' => 'nullable|string'
        ]);

        $pickup = EWastePickup::create($validated);

        // Send confirmation email
        // Mail::to($pickup->email)->send(new EWastePickupConfirmation($pickup));

        return response()->json([
            'message' => 'E-waste pickup scheduled successfully',
            'pickup_id' => $pickup->id
        ], 201);
    }
}
```

#### DonationController (with Stripe Integration)
```php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Donation;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Stripe\Stripe;
use Stripe\PaymentIntent;
use Stripe\Customer;

class DonationController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:255',
            'amount' => 'required|numeric|min:1',
            'donation_type' => 'required|in:one-time,monthly',
            'payment_method' => 'required|string',
            'card_number' => 'required|string',
            'expiry_date' => 'required|string',
            'cvv' => 'required|string',
            'name_on_card' => 'required|string',
            'billing_address' => 'required|array'
        ]);

        try {
            // Set Stripe API key
            Stripe::setApiKey(config('services.stripe.secret'));

            // Create or retrieve customer
            $customer = Customer::create([
                'email' => $validated['email'],
                'name' => $validated['first_name'] . ' ' . $validated['last_name'],
                'phone' => $validated['phone'],
                'address' => [
                    'line1' => $validated['billing_address']['address'],
                    'city' => $validated['billing_address']['city'],
                    'state' => $validated['billing_address']['state'],
                    'postal_code' => $validated['billing_address']['zip_code'],
                    'country' => 'US'
                ]
            ]);

            // Create payment intent
            $paymentIntent = PaymentIntent::create([
                'amount' => $validated['amount'] * 100, // Convert to cents
                'currency' => 'usd',
                'customer' => $customer->id,
                'description' => 'Donation to Maxsys - ' . ucfirst($validated['donation_type']),
                'metadata' => [
                    'donation_type' => $validated['donation_type'],
                    'donor_name' => $validated['first_name'] . ' ' . $validated['last_name']
                ]
            ]);

            // Create donation record
            $donation = Donation::create([
                'first_name' => $validated['first_name'],
                'last_name' => $validated['last_name'],
                'email' => $validated['email'],
                'phone' => $validated['phone'],
                'amount' => $validated['amount'],
                'donation_type' => $validated['donation_type'],
                'payment_method' => 'stripe',
                'stripe_payment_intent_id' => $paymentIntent->id,
                'stripe_customer_id' => $customer->id,
                'billing_address' => $validated['billing_address'],
                'status' => 'pending'
            ]);

            // For monthly donations, create subscription
            if ($validated['donation_type'] === 'monthly') {
                // Create subscription logic here
                // This would involve creating a Stripe subscription
            }

            return response()->json([
                'message' => 'Donation processed successfully',
                'donation_id' => $donation->id,
                'client_secret' => $paymentIntent->client_secret
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Payment processing failed',
                'error' => $e->getMessage()
            ], 400);
        }
    }
}
```

### Stripe Configuration

#### Required Environment Variables
```env
# Add to Laravel .env file
STRIPE_KEY=pk_live_your_stripe_public_key
STRIPE_SECRET=sk_live_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

#### Stripe Service Configuration
```php
// config/services.php
'stripe' => [
    'model' => App\Models\User::class,
    'key' => env('STRIPE_KEY'),
    'secret' => env('STRIPE_SECRET'),
    'webhook' => [
        'secret' => env('STRIPE_WEBHOOK_SECRET'),
        'tolerance' => env('STRIPE_WEBHOOK_TOLERANCE', 300),
    ],
],
```

#### Stripe Webhook Handler
```php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Donation;
use Illuminate\Http\Request;
use Stripe\Webhook;
use Stripe\Exception\SignatureVerificationException;

class StripeWebhookController extends Controller
{
    public function handleWebhook(Request $request)
    {
        $payload = $request->getContent();
        $sig_header = $request->header('Stripe-Signature');
        $endpoint_secret = config('services.stripe.webhook.secret');

        try {
            $event = Webhook::constructEvent($payload, $sig_header, $endpoint_secret);
        } catch (SignatureVerificationException $e) {
            return response('Invalid signature', 400);
        }

        switch ($event['type']) {
            case 'payment_intent.succeeded':
                $paymentIntent = $event['data']['object'];
                $this->handleSuccessfulPayment($paymentIntent);
                break;
            
            case 'payment_intent.payment_failed':
                $paymentIntent = $event['data']['object'];
                $this->handleFailedPayment($paymentIntent);
                break;
            
            default:
                // Unhandled event type
        }

        return response('Success', 200);
    }

    private function handleSuccessfulPayment($paymentIntent)
    {
        $donation = Donation::where('stripe_payment_intent_id', $paymentIntent['id'])->first();
        if ($donation) {
            $donation->update([
                'status' => 'completed',
                'transaction_id' => $paymentIntent['id']
            ]);
            
            // Send thank you email
            // Mail::to($donation->email)->send(new DonationThankYou($donation));
        }
    }

    private function handleFailedPayment($paymentIntent)
    {
        $donation = Donation::where('stripe_payment_intent_id', $paymentIntent['id'])->first();
        if ($donation) {
            $donation->update(['status' => 'failed']);
        }
    }
}
```

### CORS Configuration for Laravel
```php
// config/cors.php
return [
    'paths' => ['api/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'], // In production, specify your domain
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
```

## 3. Environment Configuration

### WordPress .env (if using)
```env
WP_DEBUG=false
WP_DEBUG_LOG=false
WP_DEBUG_DISPLAY=false

# Database
DB_NAME=maxsys_wordpress
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost

# API Keys
ACF_PRO_KEY=your_acf_pro_key
```

### Laravel .env
```env
APP_NAME="Maxsys HR System"
APP_ENV=production
APP_KEY=base64:your_app_key
APP_DEBUG=false
APP_URL=https://hrm.maxsys.org

# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=maxsys_hr
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password

# Mail Configuration
MAIL_MAILER=smtp
MAIL_HOST=your_smtp_host
MAIL_PORT=587
MAIL_USERNAME=your_email
MAIL_PASSWORD=your_email_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@maxsys.org
MAIL_FROM_NAME="Maxsys"

# Stripe Configuration
STRIPE_KEY=pk_live_your_stripe_public_key
STRIPE_SECRET=sk_live_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

## 4. Stripe Account Setup Requirements

### Account Configuration
1. **Create Stripe Account**: Sign up at https://stripe.com
2. **Business Verification**: Complete business verification for live payments
3. **Tax Information**: Provide tax ID and business details
4. **Bank Account**: Connect bank account for payouts

### Required Stripe Products
1. **Payment Processing**: Enable credit/debit card payments
2. **Subscriptions**: For monthly recurring donations
3. **Webhooks**: Configure webhook endpoints for payment confirmations

### Webhook Endpoints
Configure these webhook endpoints in your Stripe dashboard:
- `https://hrm.maxsys.org/api/stripe/webhook`

Required webhook events:
- `payment_intent.succeeded`
- `payment_intent.payment_failed`
- `invoice.payment_succeeded` (for subscriptions)
- `invoice.payment_failed` (for subscriptions)

### Security Settings
1. **API Keys**: Use live keys for production, test keys for development
2. **Webhook Signing**: Enable webhook signature verification
3. **HTTPS**: Ensure all endpoints use HTTPS
4. **PCI Compliance**: Follow Stripe's PCI compliance guidelines

## 5. SSL and Security

### SSL Certificate
```bash
# Install SSL certificate for both domains
certbot --nginx -d hub.maxsys.org -d hrm.maxsys.org
```

### Nginx Configuration
```nginx
# hub.maxsys.org (WordPress)
server {
    listen 443 ssl;
    server_name hub.maxsys.org;
    
    ssl_certificate /etc/letsencrypt/live/hub.maxsys.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/hub.maxsys.org/privkey.pem;
    
    root /var/www/hub.maxsys.org;
    index index.php index.html;
    
    location / {
        try_files $uri $uri/ /index.php?$args;
    }
    
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
    
    # Enable CORS for API endpoints
    location /wp-json/ {
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods "GET, POST, OPTIONS";
        add_header Access-Control-Allow-Headers "Content-Type, Authorization";
        
        if ($request_method = 'OPTIONS') {
            return 204;
        }
        
        try_files $uri $uri/ /index.php?$args;
    }
}

# hrm.maxsys.org (Laravel)
server {
    listen 443 ssl;
    server_name hrm.maxsys.org;
    
    ssl_certificate /etc/letsencrypt/live/hrm.maxsys.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/hrm.maxsys.org/privkey.pem;
    
    root /var/www/hrm.maxsys.org/public;
    index index.php;
    
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }
    
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
}
```

## 6. Testing the Integration

### Test WordPress API
```bash
# Test projects endpoint
curl -X GET "https://hub.maxsys.org/wp-json/wp/v2/projects"

# Test tech stewards endpoint
curl -X GET "https://hub.maxsys.org/wp-json/wp/v2/tech-stewards"

# Test blog posts endpoint
curl -X GET "https://hub.maxsys.org/wp-json/wp/v2/posts"
```

### Test Laravel API
```bash
# Test tech hub application submission
curl -X POST "https://hrm.maxsys.org/api/tech-hub-applications" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "location": "Test City, ST",
    "experience": "Test experience",
    "leadership_experience": "Test leadership",
    "motivation": "Test motivation"
  }'

# Test e-waste pickup scheduling
curl -X POST "https://hrm.maxsys.org/api/ewaste-pickups" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Organization",
    "email": "test@example.com",
    "phone": "555-1234",
    "organization": "Test Org",
    "address": "123 Test St",
    "device_types": ["Computers & Laptops"]
  }'

# Test donation processing
curl -X POST "https://hrm.maxsys.org/api/donations" \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "amount": 50,
    "donation_type": "one-time",
    "payment_method": "stripe",
    "card_number": "4242424242424242",
    "expiry_date": "12/25",
    "cvv": "123",
    "name_on_card": "John Doe",
    "billing_address": {
      "address": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zip_code": "12345"
    }
  }'
```

### Test Stripe Integration
```bash
# Test webhook endpoint
curl -X POST "https://hrm.maxsys.org/api/stripe/webhook" \
  -H "Content-Type: application/json" \
  -H "Stripe-Signature: test_signature" \
  -d '{
    "type": "payment_intent.succeeded",
    "data": {
      "object": {
        "id": "pi_test_123",
        "status": "succeeded"
      }
    }
  }'
```

## 7. Monitoring and Maintenance

### Log Monitoring
```bash
# WordPress logs
tail -f /var/www/hub.maxsys.org/wp-content/debug.log

# Laravel logs
tail -f /var/www/hrm.maxsys.org/storage/logs/laravel.log

# Nginx logs
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

### Backup Strategy
```bash
# Database backups
mysqldump maxsys_wordpress > backup_wp_$(date +%Y%m%d).sql
mysqldump maxsys_hr > backup_hr_$(date +%Y%m%d).sql

# File backups
tar -czf backup_files_$(date +%Y%m%d).tar.gz /var/www/
```

## 8. Stripe Dashboard Configuration

### Required Settings
1. **Business Settings**: Complete business profile
2. **Payment Methods**: Enable cards, digital wallets
3. **Currencies**: Set to USD
4. **Payouts**: Configure automatic daily payouts
5. **Receipts**: Enable automatic email receipts
6. **Disputes**: Set up dispute handling

### Recommended Stripe Apps
1. **Radar**: Fraud prevention
2. **Billing**: Subscription management
3. **Connect**: If supporting multiple organizations

This configuration guide provides the foundation for a fully functional Maxsys website with integrated Stripe payment processing. Adjust the specific details (domain names, database credentials, Stripe keys, etc.) according to your actual server setup.