import { useState, useEffect } from "react";
import { categoryAPI } from "../../api/apiClient";
import LoadingSpinner from "../common/LoadingSpinner";
import {
  HiOutlineTag,
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineInbox,
  HiOutlineRefresh,
  HiOutlineChevronRight,
  HiOutlineExternalLink,
} from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";

function CategoryHistory({ refreshKey }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      try {
        const { data } = await categoryAPI.getHistory(20);
        setHistory(data.data || []);
      } catch {
        /* handled by interceptor */
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, [refreshKey]);

  // Get confidence color and style
  const getConfidenceStyle = (score) => {
    if (score >= 0.8) {
      return {
        bgColor: "bg-emerald-100",
        textColor: "text-emerald-700",
        borderColor: "border-emerald-200",
        gradient: "from-emerald-500 to-teal-500",
        label: "High"
      };
    } else if (score >= 0.6) {
      return {
        bgColor: "bg-amber-100",
        textColor: "text-amber-700",
        borderColor: "border-amber-200",
        gradient: "from-amber-500 to-orange-500",
        label: "Medium"
      };
    } else {
      return {
        bgColor: "bg-red-100",
        textColor: "text-red-700",
        borderColor: "border-red-200",
        gradient: "from-red-500 to-rose-500",
        label: "Low"
      };
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "Yesterday";
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="relative bg-gradient-to-r from-slate-50 via-emerald-50/30 to-slate-50 rounded-xl sm:rounded-2xl p-8 sm:p-12 border border-slate-200/80">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative mb-4">
            <div className="w-12 h-12 rounded-full border-4 border-slate-200"></div>
            <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-transparent border-t-emerald-500 border-r-teal-500 animate-spin"></div>
          </div>
          <p className="text-sm font-medium text-slate-600">Loading history...</p>
          <p className="text-xs text-slate-400 mt-1">Fetching recent categorizations</p>
        </div>
      </div>
    );
  }

  // Empty State
  if (!history.length) {
    return (
      <div className="relative bg-gradient-to-br from-slate-50 via-emerald-50/20 to-teal-50/20 rounded-xl sm:rounded-2xl p-8 sm:p-12 border border-slate-200/80 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-100/50 to-transparent rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative flex flex-col items-center justify-center text-center">
          <div className="relative mb-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <HiOutlineInbox className="w-10 h-10 text-slate-300" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <HiOutlineSparkles className="w-4 h-4 text-white" />
            </div>
          </div>
          <h4 className="text-lg font-semibold text-slate-700 mb-2">No categorizations yet</h4>
          <p className="text-sm text-slate-500 max-w-sm">
            Start by entering a product above. Your categorization history will appear here.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
            <HiOutlineSparkles className="w-4 h-4" />
            <span>AI-powered categorization ready</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header Stats */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-200">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-medium text-emerald-700">{history.length} items</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-200">
          <HiOutlineClock className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-xs text-slate-600">Last 20 results</span>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-50 via-emerald-50/30 to-slate-50">
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Sub-Category
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Confidence
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Tags
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {history.map((item, idx) => {
                const confidenceStyle = getConfidenceStyle(item.confidenceScore);
                return (
                  <tr 
                    key={item._id} 
                    className="hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-transparent transition-colors group"
                  >
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center group-hover:from-emerald-200 group-hover:to-teal-200 transition-colors">
                          <FaLeaf className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-slate-800 truncate max-w-[180px] group-hover:text-emerald-700 transition-colors">
                            {item.productName}
                          </p>
                          {item.brand && (
                            <p className="text-xs text-slate-400 truncate">{item.brand}</p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 border border-emerald-200">
                        <HiOutlineTag className="w-3 h-3" />
                        {item.primaryCategory}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="text-sm text-slate-600">{item.subCategory}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-10 h-2 rounded-full bg-slate-100 overflow-hidden`}>
                          <div 
                            className={`h-full rounded-full bg-gradient-to-r ${confidenceStyle.gradient}`}
                            style={{ width: `${item.confidenceScore * 100}%` }}
                          />
                        </div>
                        <span className={`text-sm font-semibold ${confidenceStyle.textColor}`}>
                          {(item.confidenceScore * 100).toFixed(0)}%
                        </span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold bg-slate-100 text-slate-600 rounded-full">
                          {item.seoTags?.length || 0}
                        </span>
                        <span className="text-xs text-slate-400">tags</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <HiOutlineClock className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-xs text-slate-500">{formatDate(item.createdAt)}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile/Tablet Card View */}
      <div className="lg:hidden space-y-3">
        {history.map((item, idx) => {
          const confidenceStyle = getConfidenceStyle(item.confidenceScore);
          const isExpanded = expandedItem === item._id;
          
          return (
            <div 
              key={item._id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Main Card Content */}
              <button
                onClick={() => setExpandedItem(isExpanded ? null : item._id)}
                className="w-full text-left p-4 focus:outline-none"
              >
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                    <FaLeaf className="w-5 h-5 text-emerald-600" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h4 className="font-semibold text-slate-800 truncate text-sm sm:text-base">
                          {item.productName}
                        </h4>
                        <div className="flex flex-wrap items-center gap-2 mt-1.5">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-100 text-emerald-700">
                            <HiOutlineTag className="w-3 h-3" />
                            {item.primaryCategory}
                          </span>
                          <span className="text-xs text-slate-400">
                            {formatDate(item.createdAt)}
                          </span>
                        </div>
                      </div>
                      
                      {/* Confidence Badge */}
                      <div className="flex-shrink-0 flex items-center gap-2">
                        <div className={`px-2 py-1 rounded-lg ${confidenceStyle.bgColor} ${confidenceStyle.textColor}`}>
                          <span className="text-sm font-bold">
                            {(item.confidenceScore * 100).toFixed(0)}%
                          </span>
                        </div>
                        <HiOutlineChevronRight 
                          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-0 border-t border-slate-100 mt-2 animate-in slide-in-from-top-2 duration-200">
                  <div className="pt-4 space-y-3">
                    {/* Sub-category */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Sub-Category</span>
                      <span className="text-sm text-slate-700">{item.subCategory}</span>
                    </div>
                    
                    {/* Confidence bar */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Confidence</span>
                        <span className={`text-sm font-semibold ${confidenceStyle.textColor}`}>
                          {confidenceStyle.label} ({(item.confidenceScore * 100).toFixed(0)}%)
                        </span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${confidenceStyle.gradient} transition-all duration-500`}
                          style={{ width: `${item.confidenceScore * 100}%` }}
                        />
                      </div>
                    </div>
                    
                    {/* Tags */}
                    {item.seoTags && item.seoTags.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">SEO Tags</span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.seoTags.slice(0, 6).map((tag, tagIdx) => (
                            <span 
                              key={tagIdx}
                              className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                            >
                              #{tag}
                            </span>
                          ))}
                          {item.seoTags.length > 6 && (
                            <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-emerald-50 text-emerald-600 border border-emerald-200">
                              +{item.seoTags.length - 6} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Sustainability filters */}
                    {item.sustainabilityFilters && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.sustainabilityFilters.isOrganic && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700 border border-green-200">
                            🌿 Organic
                          </span>
                        )}
                        {item.sustainabilityFilters.isRecyclable && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                            ♻️ Recyclable
                          </span>
                        )}
                        {item.sustainabilityFilters.isBiodegradable && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                            🍃 Biodegradable
                          </span>
                        )}
                        {item.sustainabilityFilters.isVegan && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                            🌱 Vegan
                          </span>
                        )}
                        {item.sustainabilityFilters.isPlasticFree && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-teal-100 text-teal-700 border border-teal-200">
                            🚫 Plastic-Free
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center pt-4">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <HiOutlineRefresh className="w-3.5 h-3.5" />
          <span>Auto-refreshes on new categorization</span>
        </div>
      </div>
    </div>
  );
}

export default CategoryHistory;