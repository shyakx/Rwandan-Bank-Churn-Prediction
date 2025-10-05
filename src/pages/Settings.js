import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings as SettingsIcon,
  Save,
  RotateCcw,
  Bell,
  Mail,
  MessageSquare,
  Shield,
  Database,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { API_SETTINGS } from '../constants';

const Settings = () => {
  const [settings, setSettings] = useState({
    // Model Settings
    churnThreshold: 0.3, // Actual threshold from Colab notebook
    modelSensitivity: 0.5,
    retrainFrequency: 'weekly',
    featureSelection: {
      age: true,
      balance: true,
      transactionFrequency: true,
      tenure: true,
      creditScore: true,
      productUsage: true,
      mobileBanking: true,
      branchVisits: true,
      totalMonthlySpend: true, // Engineered feature
      balanceToAgeRatio: true, // Engineered feature
      complaintsPerProduct: true, // Engineered feature
      mobileAppEngagementRatio: true // Engineered feature
    },
    
    // Notification Settings
    notifications: {
      email: true,
      sms: false,
      inApp: true
    },
    alertThresholds: {
      highRisk: 90,
      mediumRisk: 70,
      lowRisk: 50
    },
    
    // System Settings
    dataRetention: 365,
    autoBackup: true,
    reportGeneration: 'daily',
    apiRateLimit: API_SETTINGS.DEFAULT_RATE_LIMIT,
    
    // Security Settings
    sessionTimeout: 30,
    requireMFA: false,
    auditLogging: true
  });

  const [activeTab, setActiveTab] = useState('model');
  const [hasChanges, setHasChanges] = useState(false);

  const tabs = [
    { id: 'model', name: 'Model Settings', icon: BarChart3 },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'system', name: 'System', icon: SettingsIcon },
    { id: 'security', name: 'Security', icon: Shield }
  ];

  const handleSettingChange = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
    setHasChanges(true);
  };

  const handleRootSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
    setHasChanges(true);
  };

  const handleSave = () => {
    // Mock save functionality
    // Settings saved successfully
    setHasChanges(false);
    // Show success message
  };

  const handleReset = () => {
    // Reset to default values
    setSettings({
      churnThreshold: 0.75,
      modelSensitivity: 0.5,
      retrainFrequency: 'weekly',
      featureSelection: {
        age: true,
        balance: true,
        transactionFrequency: true,
        tenure: true,
        creditScore: true,
        productUsage: true,
        mobileBanking: true,
        branchVisits: true
      },
      notifications: {
        email: true,
        sms: false,
        inApp: true
      },
      alertThresholds: {
        highRisk: 90,
        mediumRisk: 70,
        lowRisk: 50
      },
      dataRetention: 365,
      autoBackup: true,
      reportGeneration: 'daily',
      apiRateLimit: API_SETTINGS.DEFAULT_RATE_LIMIT,
      sessionTimeout: 30,
      requireMFA: false,
      auditLogging: true
    });
    setHasChanges(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Page Header */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black mb-2">Rwanda Banking Settings</h1>
          <p className="text-gray-600">Configure system parameters and preferences for Rwanda market</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          {hasChanges && (
            <div className="flex items-center space-x-2 text-yellow-400 text-sm">
              <AlertTriangle size={16} />
              <span>Unsaved changes</span>
            </div>
          )}
          <button
            onClick={handleReset}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-black rounded-lg transition-colors"
          >
            <RotateCcw size={18} />
            <span>Reset</span>
          </button>
          <button
            onClick={handleSave}
            disabled={!hasChanges}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-black rounded-lg transition-colors"
          >
            <Save size={18} />
            <span>Save Changes</span>
          </button>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div variants={itemVariants} className="bg-white border border-blue-200 rounded-xl p-6">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600/20 border border-blue-500/30 text-blue-400'
                    : 'text-slate-300 hover:text-black hover:bg-white/5'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium">{tab.name}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Model Settings */}
      {activeTab === 'model' && (
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Churn Threshold */}
          <div className="bg-white border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-black mb-6">Model Configuration</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-black font-medium">Churn Prediction Threshold</label>
                  <span className="text-blue-400 font-bold">{(settings.churnThreshold * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.05"
                  value={settings.churnThreshold}
                  onChange={(e) => handleRootSettingChange('churnThreshold', parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>Low Sensitivity</span>
                  <span>High Sensitivity</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  Customers with churn probability above this threshold will be flagged as at-risk
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-black font-medium">Model Sensitivity</label>
                  <span className="text-blue-400 font-bold">{(settings.modelSensitivity * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.1"
                  value={settings.modelSensitivity}
                  onChange={(e) => handleRootSettingChange('modelSensitivity', parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <p className="text-gray-600 text-sm mt-2">
                  Adjust the model's sensitivity to balance between false positives and false negatives
                </p>
              </div>

              <div>
                <label className="text-black font-medium mb-3 block">Model Retrain Frequency</label>
                <select
                  value={settings.retrainFrequency}
                  onChange={(e) => handleRootSettingChange('retrainFrequency', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-black focus:outline-none focus:border-blue-500"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                </select>
              </div>
            </div>
          </div>

          {/* Feature Selection */}
          <div className="bg-white border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-black mb-6">Feature Selection</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(settings.featureSelection).map(([feature, enabled]) => (
                <div key={feature} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-black capitalize">
                    {feature.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <button
                    onClick={() => handleSettingChange('featureSelection', feature, !enabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      enabled ? 'bg-blue-600' : 'bg-slate-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        enabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Notification Settings */}
      {activeTab === 'notifications' && (
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="bg-white border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-black mb-6">Notification Preferences</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-400" size={20} />
                  <div>
                    <div className="text-black font-medium">Email Notifications</div>
                    <div className="text-gray-600 text-sm">Receive alerts via email</div>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('notifications', 'email', !settings.notifications.email)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.notifications.email ? 'bg-blue-600' : 'bg-slate-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.notifications.email ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="text-green-400" size={20} />
                  <div>
                    <div className="text-black font-medium">SMS Notifications</div>
                    <div className="text-gray-600 text-sm">Receive alerts via SMS</div>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('notifications', 'sms', !settings.notifications.sms)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.notifications.sms ? 'bg-blue-600' : 'bg-slate-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.notifications.sms ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Bell className="text-orange-400" size={20} />
                  <div>
                    <div className="text-black font-medium">In-App Notifications</div>
                    <div className="text-gray-600 text-sm">Show notifications within the application</div>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('notifications', 'inApp', !settings.notifications.inApp)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.notifications.inApp ? 'bg-blue-600' : 'bg-slate-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.notifications.inApp ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Alert Thresholds */}
          <div className="bg-white border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-black mb-6">Alert Thresholds</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-black font-medium">High Risk Threshold</label>
                  <span className="text-red-400 font-bold">{settings.alertThresholds.highRisk}%</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="100"
                  step="5"
                  value={settings.alertThresholds.highRisk}
                  onChange={(e) => handleSettingChange('alertThresholds', 'highRisk', parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-black font-medium">Medium Risk Threshold</label>
                  <span className="text-orange-400 font-bold">{settings.alertThresholds.mediumRisk}%</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="90"
                  step="5"
                  value={settings.alertThresholds.mediumRisk}
                  onChange={(e) => handleSettingChange('alertThresholds', 'mediumRisk', parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-black font-medium">Low Risk Threshold</label>
                  <span className="text-yellow-400 font-bold">{settings.alertThresholds.lowRisk}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="70"
                  step="5"
                  value={settings.alertThresholds.lowRisk}
                  onChange={(e) => handleSettingChange('alertThresholds', 'lowRisk', parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* System Settings */}
      {activeTab === 'system' && (
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="bg-white border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-black mb-6">System Configuration</h3>
            
            <div className="space-y-6">
              <div>
                <label className="text-black font-medium mb-3 block">Data Retention Period (Days)</label>
                <input
                  type="number"
                  min="30"
                  max="1095"
                  value={settings.dataRetention}
                  onChange={(e) => handleRootSettingChange('dataRetention', parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-black focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Database className="text-green-400" size={20} />
                  <div>
                    <div className="text-black font-medium">Automatic Backup</div>
                    <div className="text-gray-600 text-sm">Enable automatic daily backups</div>
                  </div>
                </div>
                <button
                  onClick={() => handleRootSettingChange('autoBackup', !settings.autoBackup)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.autoBackup ? 'bg-blue-600' : 'bg-slate-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.autoBackup ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div>
                <label className="text-black font-medium mb-3 block">Report Generation Frequency</label>
                <select
                  value={settings.reportGeneration}
                  onChange={(e) => handleRootSettingChange('reportGeneration', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-black focus:outline-none focus:border-blue-500"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              <div>
                <label className="text-black font-medium mb-3 block">API Rate Limit (requests/hour)</label>
                <input
                  type="number"
                  min="100"
                  max="10000"
                  value={settings.apiRateLimit}
                  onChange={(e) => handleRootSettingChange('apiRateLimit', parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-black focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Security Settings */}
      {activeTab === 'security' && (
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="bg-white border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-black mb-6">Security Configuration</h3>
            
            <div className="space-y-6">
              <div>
                <label className="text-black font-medium mb-3 block">Session Timeout (Minutes)</label>
                <input
                  type="number"
                  min="5"
                  max="480"
                  value={settings.sessionTimeout}
                  onChange={(e) => handleRootSettingChange('sessionTimeout', parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-black focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="text-purple-400" size={20} />
                  <div>
                    <div className="text-black font-medium">Multi-Factor Authentication</div>
                    <div className="text-gray-600 text-sm">Require MFA for all users</div>
                  </div>
                </div>
                <button
                  onClick={() => handleRootSettingChange('requireMFA', !settings.requireMFA)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.requireMFA ? 'bg-blue-600' : 'bg-slate-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.requireMFA ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Database className="text-orange-400" size={20} />
                  <div>
                    <div className="text-black font-medium">Audit Logging</div>
                    <div className="text-gray-600 text-sm">Log all user actions and system events</div>
                  </div>
                </div>
                <button
                  onClick={() => handleRootSettingChange('auditLogging', !settings.auditLogging)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.auditLogging ? 'bg-blue-600' : 'bg-slate-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.auditLogging ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Security Status */}
          <div className="bg-white border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-black mb-6">Security Status</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-black">SSL/TLS Encryption</span>
                </div>
                <span className="text-green-400 text-sm font-medium">Enabled</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-black">Password Policy</span>
                </div>
                <span className="text-green-400 text-sm font-medium">Enforced</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {settings.requireMFA ? (
                    <CheckCircle className="text-green-400" size={20} />
                  ) : (
                    <XCircle className="text-red-400" size={20} />
                  )}
                  <span className="text-black">Multi-Factor Authentication</span>
                </div>
                <span className={`text-sm font-medium ${
                  settings.requireMFA ? 'text-green-400' : 'text-red-400'
                }`}>
                  {settings.requireMFA ? 'Enabled' : 'Disabled'}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {settings.auditLogging ? (
                    <CheckCircle className="text-green-400" size={20} />
                  ) : (
                    <XCircle className="text-red-400" size={20} />
                  )}
                  <span className="text-black">Audit Logging</span>
                </div>
                <span className={`text-sm font-medium ${
                  settings.auditLogging ? 'text-green-400' : 'text-red-400'
                }`}>
                  {settings.auditLogging ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Settings;

