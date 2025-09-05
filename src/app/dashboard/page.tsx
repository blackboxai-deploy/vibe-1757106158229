export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">AssetHub Dashboard</h1>
          <p className="text-gray-600">Enterprise asset management overview</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Assets</p>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600">💻</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Tickets</p>
                <p className="text-2xl font-bold text-gray-900">23</p>
              </div>
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600">🎫</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Portfolio Value</p>
                <p className="text-2xl font-bold text-gray-900">€2.8M</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600">💰</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">SLA Compliance</p>
                <p className="text-2xl font-bold text-gray-900">89%</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600">📊</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">SW</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Sarah Wilson assigned MacBook Pro #LT-2024-001</p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">MJ</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Mike Johnson resolved P2 ticket #T-2024-0098</p>
                  <p className="text-xs text-gray-500">15 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm">SY</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">System generated return label for Dell Monitor</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <a
                href="/dashboard/assets/scan"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg text-center transition-all"
              >
                📱 Scan QR Code
              </a>
              <a
                href="/dashboard/tickets/new"
                className="block w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-4 rounded-lg text-center transition-all"
              >
                🎫 Create Ticket
              </a>
              <a
                href="/dashboard/finance"
                className="block w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-4 rounded-lg text-center transition-all"
              >
                💰 Financial Reports
              </a>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">System Status</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-700">Database:</span>
                  <span className="text-green-600">✓ Operational</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">APIs:</span>
                  <span className="text-green-600">✓ All Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Mobile:</span>
                  <span className="text-green-600">✓ Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Enterprise Features</h2>
            <p className="text-xl opacity-90 mb-8">
              Advanced automation, GDPR compliance, and mobile integration
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-2xl mb-3">🔄</div>
                <h3 className="font-semibold mb-2">Automated Workflows</h3>
                <p className="text-sm opacity-90">Employee hire/termination triggers asset management</p>
              </div>
              
              <div>
                <div className="text-2xl mb-3">🔒</div>
                <h3 className="font-semibold mb-2">GDPR Compliance</h3>
                <p className="text-sm opacity-90">3.2s data deletion with audit trails</p>
              </div>
              
              <div>
                <div className="text-2xl mb-3">📊</div>
                <h3 className="font-semibold mb-2">Financial Intelligence</h3>
                <p className="text-sm opacity-90">Real-time depreciation and forecasting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}