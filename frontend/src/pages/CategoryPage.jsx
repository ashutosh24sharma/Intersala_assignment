import { useState } from "react";
import toast from "react-hot-toast";
import CategoryForm from "../components/CategoryModule/CategoryForm";
import CategoryResult from "../components/CategoryModule/CategoryResult";
import CategoryHistory from "../components/CategoryModule/CategoryHistory";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ErrorAlert from "../components/common/ErrorAlert";
import { categoryAPI } from "../api/apiClient";
import {
  HiOutlineTag,
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";

function CategoryPage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [historyRefresh, setHistoryRefresh] = useState(0);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const { data } = await categoryAPI.categorize(formData);
      setResult(data.data);
      setHistoryRefresh((k) => k + 1);
      toast.success(
        `Categorized as "${data.data.primaryCategory}" with ${(
          data.data.confidenceScore * 100
        ).toFixed(0)}% confidence`
      );
    } catch (err) {
      setError(
        err.response?.data?.error ||
          err.response?.data?.errors?.[0]?.message ||
          "Failed to categorize product."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 space-y-6 sm:space-y-8">
        
        {/* Page Header */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 p-6 sm:p-8 lg:p-10 shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          </div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg"></div>
                <div className="relative bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-2xl border border-white/30">
                  <HiOutlineTag className="text-2xl sm:text-3xl lg:text-4xl text-white" />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                    <HiOutlineSparkles className="w-3.5 h-3.5" />
                    Module 1
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-400/30 text-emerald-100 border border-emerald-400/40">
                    <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse"></span>
                    Active
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Auto-Category & Tags
                </h1>
                <p className="text-emerald-100 mt-2 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                  AI-powered product categorization with SEO tags and sustainability analysis
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            { icon: HiOutlineTag, label: "Smart Categories", color: "from-emerald-500 to-teal-600" },
            { icon: HiOutlineLightBulb, label: "SEO Tags", color: "from-amber-500 to-orange-600" },
            { icon: FaLeaf, label: "Eco Analysis", color: "from-green-500 to-emerald-600" },
            { icon: HiOutlineCheckCircle, label: "JSON Output", color: "from-blue-500 to-indigo-600" },
          ].map((feature, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-xl p-3 sm:p-4 border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all duration-300"
            >
              <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${feature.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-700">{feature.label}</p>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-emerald-200/60 shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/40 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative flex items-start gap-4">
            <div className="flex-shrink-0 hidden sm:block">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                <HiOutlineLightBulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-emerald-800 text-base sm:text-lg flex items-center gap-2">
                <HiOutlineLightBulb className="w-5 h-5 sm:hidden text-emerald-600" />
                How it works
              </h3>
              <p className="text-sm sm:text-base text-emerald-700/90 mt-1 leading-relaxed">
                Enter a product name and description. Our AI will auto-assign a{" "}
                <span className="font-medium text-emerald-800">primary category</span>, suggest a{" "}
                <span className="font-medium text-emerald-800">sub-category</span>, generate{" "}
                <span className="font-medium text-emerald-800">5-10 SEO tags</span>, and evaluate{" "}
                <span className="font-medium text-emerald-800">sustainability filters</span> — all returned as structured JSON.
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-tr from-teal-100/50 to-transparent rounded-full"></div>
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-lg">
                <HiOutlineSparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-800">Product Information</h2>
                <p className="text-xs sm:text-sm text-slate-500">Fill in the details below to categorize your product</p>
              </div>
            </div>
            
            <CategoryForm onSubmit={handleSubmit} isLoading={loading} />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="relative bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-emerald-500 rounded-full filter blur-xl animate-pulse"></div>
              <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-teal-500 rounded-full filter blur-xl animate-pulse delay-500"></div>
            </div>
            
            <div className="relative flex flex-col items-center text-center">
              {/* Custom spinner */}
              <div className="relative mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-slate-700"></div>
                <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-transparent border-t-emerald-400 border-r-teal-400 animate-spin"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <HiOutlineSparkles className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">AI is analyzing your product</h3>
              <p className="text-sm sm:text-base text-slate-400 max-w-md">
                Processing categories, generating SEO tags, and evaluating sustainability filters...
              </p>
              
              {/* Progress dots */}
              <div className="flex items-center gap-2 mt-4">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="relative bg-gradient-to-r from-red-50 via-rose-50 to-red-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-red-200/60 shadow-sm overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-rose-500 to-red-500"></div>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg shadow-red-500/25">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-red-800 text-base sm:text-lg">Something went wrong</h3>
                <p className="text-sm sm:text-base text-red-700/90 mt-1">{error}</p>
                <button
                  onClick={() => setError(null)}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-rose-600 text-white text-sm font-medium rounded-lg hover:from-red-700 hover:to-rose-700 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Result Section */}
        {result && (
          <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
            
            {/* Success indicator */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400 rounded-xl blur-md opacity-40"></div>
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                  <HiOutlineCheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-800">Analysis Complete</h2>
                <p className="text-xs sm:text-sm text-slate-500">Your product has been successfully categorized</p>
              </div>
              
              {/* Confidence badge */}
              <div className="ml-auto hidden sm:block">
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold shadow-lg shadow-emerald-500/25">
                  {(result.confidenceScore * 100).toFixed(0)}% Confidence
                </div>
              </div>
            </div>
            
            {/* Mobile confidence badge */}
            <div className="sm:hidden mb-4">
              <div className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold shadow-lg shadow-emerald-500/25">
                {(result.confidenceScore * 100).toFixed(0)}% Confidence
              </div>
            </div>
            
            <CategoryResult result={result} />
          </div>
        )}

        {/* History Section */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-slate-100/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-800">Recent History</h2>
                  <p className="text-xs sm:text-sm text-slate-500">Your past categorization results</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Auto-refreshes
              </div>
            </div>
            
            <CategoryHistory refreshKey={historyRefresh} />
          </div>
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {[
            { value: "AI", label: "Powered", color: "from-violet-500 to-purple-600" },
            { value: "JSON", label: "Output", color: "from-blue-500 to-indigo-600" },
            { value: "100%", label: "Accuracy", color: "from-emerald-500 to-teal-600" },
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:shadow-md transition-all duration-300 text-center group"
            >
              <div className={`text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block`}>
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;