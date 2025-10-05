# Rwanda Banking Churn Prediction System

A comprehensive machine learning application for predicting customer churn in the Rwandan banking sector. This system combines advanced data visualization with ensemble machine learning models to help banks identify at-risk customers and implement targeted retention strategies.

## 🏦 Overview

This application provides a complete solution for customer churn prediction in the Rwandan banking context, featuring:

- **Real-time Dashboard** with key performance metrics
- **Customer Lookup** with detailed risk assessment
- **Retention Management** with bulk actions and filtering
- **Advanced Analytics** with model evaluation and feature analysis
- **Configurable Settings** for model parameters and thresholds

## 📊 Model Performance Results

### Initial Model Metrics
- **Accuracy**: 35.83%
- **Precision**: 29.56%
- **Recall**: 84.51%
- **F1 Score**: 43.80%

### Adjusted Threshold Metrics (Optimized for Maximum Recall)
- **Accuracy**: 29.58%
- **Precision**: 29.58%
- **Recall**: 100.0%
- **F1 Score**: 45.66%

### Confusion Matrix (Initial Model)
```
                 Predicted
Actual     Negative  Positive
Negative      26       143
Positive      11        60
```

### Confusion Matrix (Adjusted Threshold)
```
                 Predicted
Actual     Negative  Positive
Negative       0       169
Positive       0        71
```

## 🎯 Model Architecture

### Ensemble Model
- **Primary Model**: XGBoost Classifier
- **Secondary Model**: Logistic Regression
- **Ensemble Method**: Weighted combination for improved performance

### Best Hyperparameters
```python
{
    'colsample_bytree': 0.7,
    'learning_rate': 0.01,
    'max_depth': 3,
    'n_estimators': 300,
    'scale_pos_weight': 3,
    'subsample': 0.7
}
```

### Model Optimization
- **Threshold**: Adjusted to 0.3 for maximum recall
- **Class Imbalance**: Handled using SMOTE oversampling and scale_pos_weight=3
- **Feature Engineering**: 4 engineered features added for improved performance

## 📈 Feature Importance Analysis

The model identified the following top features influencing customer churn:

| Rank | Feature | Importance Score |
|------|---------|------------------|
| 1 | Gender_Male | 23.21 |
| 2 | Branch_Visits | 17.55 |
| 3 | Account_Type_Savings | 15.87 |
| 4 | Product_Usage | 15.00 |
| 5 | Customer_ID | 14.87 |
| 6 | Age | 14.00 |
| 7 | Mobile_Banking_Usage | 13.40 |
| 8 | Transaction_Frequency | 13.10 |
| 9 | Tenure | 12.36 |
| 10 | Total_Monthly_Spend | 12.12 |

### Key Insights
- **Gender_Male** shows the highest importance, suggesting gender-based behavioral patterns
- **Branch_Visits** is the second most important feature, indicating physical branch interaction patterns
- **Customer_ID** shows high importance, suggesting potential temporal patterns or data leakage
- **Account_Type_Savings** indicates account type significantly influences churn probability

## 🔧 Engineered Features

The model includes four engineered features to improve predictive performance:

1. **Total_Monthly_Spend**: Aggregated monthly spending patterns
2. **Balance_to_Age_Ratio**: Account balance relative to customer age
3. **Complaints_Per_Product**: Complaint frequency normalized by product usage
4. **Mobile_App_Engagement_Ratio**: Mobile app usage relative to total banking activity

## 📊 Data Distribution Analysis

### Customer Demographics
- **Total Customers**: 45,670
- **Churn Rate**: 29.6%
- **Retention Rate**: 70.4%
- **Average Account Balance**: 1,250,000 RWF
- **At-Risk Customers**: 13,520 (29.6% of total)

### Feature Distributions
- **Age**: Multi-modal distribution with peaks around 20-25, 40-45, and 50-55
- **Account Balance**: Right-skewed distribution with most customers having lower balances
- **Transaction Frequency**: Varied distribution with peaks at different frequency levels
- **Product Usage**: Relatively uniform distribution across 1-5 usage levels
- **Mobile Banking Usage**: Highly right-skewed with concentration at maximum usage (30)

## 🎨 Application Features

### Dashboard
- Real-time churn metrics and trends
- Customer risk distribution visualization
- Feature importance analysis
- Quick action buttons for common tasks

### Customer Lookup
- Individual customer risk assessment
- Detailed transaction and engagement history
- Churn probability scoring
- Personalized retention recommendations

### Retention Management
- Bulk customer management
- Advanced filtering and search
- Export capabilities
- Automated risk scoring

### Analytics & Reports
- Model performance evaluation
- ROC Curve analysis (AUC = 0.46)
- Precision-Recall curves
- Confusion matrix visualization
- Feature correlation analysis
- Distribution analysis for all features

### Settings
- Model parameter configuration
- Threshold adjustment
- Feature selection
- System preferences

## 🚀 Technology Stack

### Frontend
- **React 18** - Modern UI framework
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Chart.js** - Data visualization
- **React Router** - Navigation

### Machine Learning
- **XGBoost** - Gradient boosting classifier
- **Logistic Regression** - Linear classifier
- **SMOTE** - Synthetic minority oversampling
- **Scikit-learn** - ML utilities and metrics

### Development Tools
- **ESLint** - Code quality
- **Prettier** - Code formatting
- **Git** - Version control

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/shyakx/Rwandan-Bank-Churn-Prediction.git
   cd Rwandan-Bank-Churn-Prediction
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Production Build
```bash
npm run build
```

## 🔍 Model Evaluation

### ROC Curve Analysis
- **AUC Score**: 0.46
- **Performance**: Below random chance (0.5)
- **Interpretation**: Model requires significant improvement

### Precision-Recall Analysis
- **Initial Model**: Precision 29.6%, Recall 84.5%
- **Adjusted Threshold**: Precision 29.6%, Recall 100%
- **Trade-off**: High recall achieved at cost of precision

### Recommendations for Improvement
1. **Feature Engineering**: Develop more predictive features
2. **Data Quality**: Address potential data leakage (Customer_ID importance)
3. **Model Selection**: Consider alternative algorithms
4. **Hyperparameter Tuning**: Further optimization needed
5. **Data Collection**: Gather additional customer behavior data

## 🌍 Rwanda Banking Context

### Localized Features
- **Currency**: Rwandan Franc (RWF)
- **Locations**: Rwandan cities and regions
- **Demographics**: Rwandan population characteristics
- **Banking Products**: Mobile Money, SACCO memberships
- **Cultural Context**: Localized customer names and addresses

### Business Impact
- **Revenue at Risk**: 2.4B RWF
- **Customer Retention**: 70.4% retention rate
- **Risk Management**: 13,520 at-risk customers identified
- **Strategic Focus**: Mobile Money and SACCO partnerships

## 📝 Usage Guidelines

### For Bank Managers
1. **Daily Monitoring**: Check dashboard for churn trends
2. **Customer Intervention**: Use customer lookup for individual assessments
3. **Bulk Actions**: Implement retention campaigns for high-risk segments
4. **Performance Review**: Monitor model accuracy and adjust thresholds

### For Data Scientists
1. **Model Evaluation**: Review ROC and Precision-Recall curves
2. **Feature Analysis**: Study feature importance and correlations
3. **Parameter Tuning**: Adjust model settings in the Settings page
4. **Data Export**: Download reports for further analysis

## 🔮 Future Enhancements

### Model Improvements
- [ ] Implement deep learning models
- [ ] Add time-series analysis for temporal patterns
- [ ] Develop ensemble methods with more algorithms
- [ ] Create automated hyperparameter optimization

### Feature Additions
- [ ] Real-time data integration
- [ ] Advanced customer segmentation
- [ ] Predictive analytics for product recommendations
- [ ] Integration with CRM systems

### UI/UX Enhancements
- [ ] Mobile-responsive design improvements
- [ ] Advanced filtering and search capabilities
- [ ] Customizable dashboard widgets
- [ ] Real-time notifications and alerts

## 📊 Performance Monitoring

### Key Metrics to Track
- **Model Accuracy**: Monitor prediction accuracy over time
- **Business Impact**: Track retention rate improvements
- **Customer Satisfaction**: Measure intervention effectiveness
- **System Performance**: Monitor application response times

### Regular Maintenance
- **Weekly**: Review model performance metrics
- **Monthly**: Update customer data and retrain models
- **Quarterly**: Comprehensive model evaluation and improvement
- **Annually**: Strategic review and technology updates

## 🤝 Contributing

We welcome contributions to improve the Rwanda Banking Churn Prediction System. Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Add tests if applicable**
5. **Submit a pull request**

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- **Email**: support@rwandabankchurn.com
- **Documentation**: [Wiki](https://github.com/shyakx/Rwandan-Bank-Churn-Prediction/wiki)
- **Issues**: [GitHub Issues](https://github.com/shyakx/Rwandan-Bank-Churn-Prediction/issues)

## 🙏 Acknowledgments

- **Rwanda Banking Sector** for providing domain expertise
- **Open Source Community** for the excellent tools and libraries
- **Data Science Team** for model development and validation
- **UI/UX Designers** for creating an intuitive interface

---

**Built with ❤️ for the Rwanda Banking Sector**

*Empowering banks to predict, prevent, and manage customer churn through advanced machine learning and data visualization.*