# Customer Churn Prediction System

A comprehensive React-based banking application for predicting and managing customer churn risk with an intuitive dashboard interface.

## 🚀 Features

### 📊 Dashboard
- **Key Metrics Overview**: Total customers, at-risk customers, average account balance, and tenure metrics
- **Interactive Visualizations**: 
  - Churn distribution pie chart
  - Feature importance bar chart
  - Monthly churn trends line chart
  - Top risk customers table
- **Real-time Analytics**: Live updates and trend analysis
- **Quick Actions**: Direct access to search, retention list, and report generation

### 🔍 Customer Lookup
- **Advanced Search**: Search by Customer ID, name, or email with auto-complete
- **Comprehensive Profile**: Customer details, account information, and product usage
- **Risk Assessment**: 
  - Churn probability with visual indicators
  - Risk score visualization
  - Color-coded risk levels (Critical, High, Medium, Low)
- **Transaction Analysis**: Frequency, average value, mobile usage, and branch visits
- **Complaint History**: Track and display customer service interactions
- **Action Buttons**: Add to retention list, send email, call customer

### 👥 Retention List
- **Advanced Filtering**: Filter by account type, age group, tenure, risk probability, and product usage
- **Sortable Table**: Sort by any column with visual indicators
- **Bulk Operations**: Select multiple customers for batch actions
- **Export Functionality**: Download data as CSV
- **Risk Visualization**: Progress bars and color-coded risk indicators
- **Action Tools**: Email, SMS, and phone call capabilities

### 📈 Reports & Analytics
- **Multiple Report Types**:
  - Overview Report: Key metrics and trends
  - Demographics Analysis: Age and gender-based insights
  - Product Usage Analysis: Churn by product type
  - Trend Analysis: Historical and predictive trends
- **Interactive Charts**: 
  - Churn by demographics
  - Product usage correlation
  - Correlation heatmap
  - Time-series analysis
- **Downloadable Reports**: Export as PDF or images
- **Period Selection**: 3 months, 6 months, 1 year, 2 years

### ⚙️ Settings & Configuration
- **Model Settings**:
  - Adjustable churn prediction threshold
  - Model sensitivity controls
  - Feature selection toggles
  - Retrain frequency settings
- **Notification Preferences**:
  - Email, SMS, and in-app notifications
  - Customizable alert thresholds
- **System Configuration**:
  - Data retention policies
  - Auto-backup settings
  - API rate limits
- **Security Settings**:
  - Session timeout controls
  - Multi-factor authentication
  - Audit logging
  - Security status monitoring

## 🎨 Design Features

- **Darkened Blue Theme**: Professional banking interface with soft gradients
- **Glassmorphism Effects**: Modern glass-like components with backdrop blur
- **Smooth Animations**: Framer Motion animations for page transitions and interactions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, loading states, and smooth transitions
- **Color-Coded Risk Indicators**: Intuitive visual feedback for risk levels

## 🛠️ Technology Stack

- **Frontend**: React 18 with functional components and hooks
- **Routing**: React Router DOM for navigation
- **Styling**: Tailwind CSS with custom configuration
- **Charts**: Chart.js with react-chartjs-2
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**:
   ```bash
   cd "D:\Projects\Churn Prediction"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.js        # Navigation header with BK logo
│   ├── MetricCard.js    # Dashboard metric cards
│   ├── ChurnDistributionChart.js
│   ├── FeatureImportanceChart.js
│   ├── MonthlyChurnTrendsChart.js
│   ├── TopRiskCustomersTable.js
│   ├── ChurnByDemographicsChart.js
│   ├── ChurnTrendsChart.js
│   ├── CorrelationHeatmap.js
│   └── ChurnByProductChart.js
├── pages/               # Main application pages
│   ├── Dashboard.js     # Main dashboard with metrics
│   ├── CustomerLookup.js # Customer search and analysis
│   ├── RetentionList.js # At-risk customer management
│   ├── Reports.js       # Analytics and reporting
│   └── Settings.js      # System configuration
├── App.js              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎯 Key Components

### Dashboard Components
- **MetricCard**: Displays key performance indicators with trend indicators
- **ChurnDistributionChart**: Pie chart showing churn vs retention rates
- **FeatureImportanceChart**: Bar chart displaying model feature importance
- **MonthlyChurnTrendsChart**: Line chart with predicted vs actual churn trends
- **TopRiskCustomersTable**: Sortable table of highest risk customers

### Customer Lookup Components
- Search functionality with real-time suggestions
- Customer profile display with comprehensive information
- Risk assessment visualization with progress bars
- Transaction analysis and complaint history

### Retention List Features
- Advanced filtering system
- Sortable columns with visual indicators
- Bulk selection and actions
- Export functionality for data analysis

### Reports Components
- Multiple chart types (bar, line, doughnut, heatmap)
- Interactive data visualization
- Downloadable report generation
- Period-based data filtering

## 🔧 Configuration

The application uses Tailwind CSS with a custom configuration that includes:
- Custom color palette with darkened blue theme
- Animation keyframes for smooth transitions
- Glassmorphism utilities
- Responsive design utilities

## 🚀 Getting Started

1. **Navigate to the project directory**
2. **Install all dependencies** using `npm install`
3. **Start the development server** with `npm start`
4. **Explore the application** through the different sections:
   - Dashboard for overview metrics
   - Customer Lookup for individual analysis
   - Retention List for managing at-risk customers
   - Reports for detailed analytics
   - Settings for system configuration

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full feature set with multi-column layouts
- **Tablet**: Adapted layouts with touch-friendly interactions
- **Mobile**: Single-column layouts with mobile-optimized navigation

## 🎨 Customization

The application can be easily customized by modifying:
- **Colors**: Update the Tailwind configuration in `tailwind.config.js`
- **Animations**: Modify Framer Motion animations in components
- **Charts**: Customize Chart.js configurations in chart components
- **Layout**: Adjust component layouts and spacing

## 🔮 Future Enhancements

- Integration with real banking APIs
- Machine learning model integration
- Real-time data streaming
- Advanced analytics and insights
- Customer communication automation
- A/B testing for retention campaigns

---

**Built with ❤️ for banking professionals to effectively manage customer churn risk.**

