## 📁 Project Structure (QuickShow)
``` bash
QuickShow/
│
├── client/                 # Frontend (React + Vite)
├── server/                 # Backend (Node + Express)
├── Screenshots/           
│
├── .env.example            # Environment variables example
├── .gitignore
├── README.md               # Main project documentation
```

## 🎨 Frontend Folder Structure (/client)
``` bash
client/
│
├── node_modules/
│
├── public/
│   └── favicon.ico
│
├── src/
│   │
│   ├── assets/             
│   │
│   ├── components/
│   │   ├── AdminNavbar.jsx
│   │   ├── AdminSidebar.jsx
│   │   ├── BlurCircle.jsx
│   │   ├── DateSelect.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Loading.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieFeatured.jsx
│   │   ├── MovieTrailer.jsx
│   │   ├── Navbar.jsx
│   │   └── Title.jsx
│   │
│   ├── context/
│   │   └── AppContext.jsx  
│   │
│   ├── lib/
│   │   ├── DateCalculate.js
│   │   ├── ThousandCalculate.js
│   │   ├── Time.js
│   │   ├── TimeCalculate.js
│   │   └── TimeFormat.js
│   │
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── Addshow.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── Listbookings.jsx
│   │   │
│   │   ├── Listshow.jsx
│   │   ├── Favourite.jsx
│   │   ├── Home.jsx
│   │   ├── Moviedetails.jsx
│   │   ├── Movies.jsx
│   │   ├── MyBooking.jsx
│   │   └── no-cast.jpg
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vercel.json
└── vite.config.js
```

## ⚙️ Backend Folder Structure (/server)
``` bash
server/
│
├── node_modules/
│
├── config/
│   ├── database.js        
│   └── nodemailer.js      
│
├── Control/
│   ├── Admincontrol.js
│   ├── Bookingscontrol.js
│   ├── Showcontrol.js
│   ├── Stripewebhooks.js
│   └── Usercontrol.js
│
├── Inngest/
│   └── index.js            
│
├── Middleware/
│   └── Auth.js             
│
├── models/
│   ├── Booking.js
│   ├── Movie.js
│   ├── Show.js
│   └── User.js
│
├── Routes/
│   ├── adminrouter.js
│   ├── bookingrouter.js
│   ├── showrouter.js
│   └── userrouter.js
│
├── .env
├── package.json
├── package-lock.json
├── server.js               
└── vercel.json
```

## ⚙️ Backend Environment Variables (server/.env.example)🎨 Frontend Environment Variables (client/.env.example)
``` env
MONGO_URI = 
CLERK_PUBLISHABLE_KEY = 
CLERK_SECRET_KEY = 
INNGEST_EVENT_KEY = 
INNGEST_SIGNING_KEY = 
X_RAPIAPI_KEY = 
STRIPE_PUBLISABLE_KEY = 
STRIPE_SECRET_KEY = 
STRIPE_WEBHOOK_KEY = 
SENDER_EMAIL = 
SMTP_USER = 
SMTP_PASS = 
```
## 🎨 Frontend Environment Variables (client/.env.example)
``` env
VITE_CURRENCY = '₹'
VITE_CLERK_PUBLISHABLE_KEY = 
VITE_BASE_URL = 
```

## 📥 Clone the Repository
``` bash
git clone https://github.com/Sreejib-Nandy/QuickShow.git
cd QuickShow
```

## ▶️ Run the Project Locally
#### Backend
``` bash
cd server
npm install
npm run dev
```
#### Backend will run at :
```bash
http://localhost:5000
```

#### Frontend
``` bash
cd client
npm install
npm run dev
```
#### Frontend will run at :
```bash
http://localhost:5173
```

## 🛑 Important Notes
``` text
• Never commit .env files
• Use .env.example for reference
• Restart server after env changes
```
