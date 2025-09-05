export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            AssetHub
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Enterprise
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive inventory & asset management with mobile support, 
            financial tracking, GDPR compliance, and advanced automation features.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">Asset Management</h3>
              <p className="text-gray-600">Complete lifecycle tracking with QR scanning</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Financial Analytics</h3>
              <p className="text-gray-600">Depreciation tracking and cost optimization</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
              <p className="text-gray-600">Native iOS/Android with offline sync</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <a
              href="/dashboard"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all shadow-lg"
            >
              Access Dashboard
            </a>
            
            <div className="text-sm text-gray-500">
              Default Admin: admin@assethub.local / AssetHub2024!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}