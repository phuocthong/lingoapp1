import { Trophy, TrendingUp, Medal, Crown, Star } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

interface LeaderboardUser {
  id: string;
  name: string;
  score: number;
  unit: string;
  avatar: string;
  rank: number;
  streak?: number;
  accuracy?: number;
}

interface LeaderboardPeriod {
  id: string;
  name: string;
  users: LeaderboardUser[];
  currentUserRank?: {
    rank: number;
    score: number;
    outOfTotal: number;
  };
}

const leaderboardData: Record<string, LeaderboardPeriod> = {
  total: {
    id: "total",
    name: "Tổng",
    users: [
      { id: "1", name: "Minh Anh", score: 2456, unit: "câu đúng", avatar: "MA", rank: 1, streak: 15, accuracy: 89 },
      { id: "2", name: "Thành Hòa", score: 2195, unit: "câu đúng", avatar: "TH", rank: 2, streak: 23, accuracy: 92 },
      { id: "3", name: "Văn Nam", score: 1957, unit: "câu đúng", avatar: "VN", rank: 3, streak: 12, accuracy: 87 },
      { id: "4", name: "Thu Trang", score: 1834, unit: "câu đúng", avatar: "TT", rank: 4, streak: 8, accuracy: 94 },
      { id: "5", name: "Đức Minh", score: 1672, unit: "câu đúng", avatar: "DM", rank: 5, streak: 5, accuracy: 86 },
    ],
    currentUserRank: { rank: 8, score: 523, outOfTotal: 200 }
  },
  week: {
    id: "week",
    name: "Tuần",
    users: [
      { id: "2", name: "Thành Hòa", score: 156, unit: "câu đúng", avatar: "TH", rank: 1, streak: 7, accuracy: 94 },
      { id: "1", name: "Minh Anh", score: 142, unit: "câu đúng", avatar: "MA", rank: 2, streak: 6, accuracy: 91 },
      { id: "4", name: "Thu Trang", score: 138, unit: "câu đúng", avatar: "TT", rank: 3, streak: 5, accuracy: 96 },
      { id: "6", name: "Lan Anh", score: 129, unit: "câu đúng", avatar: "LA", rank: 4, streak: 8, accuracy: 89 },
      { id: "3", name: "Văn Nam", score: 124, unit: "câu đúng", avatar: "VN", rank: 5, streak: 4, accuracy: 87 },
    ],
    currentUserRank: { rank: 7, score: 78, outOfTotal: 50 }
  },
  month: {
    id: "month",
    name: "Tháng",
    users: [
      { id: "1", name: "Minh Anh", score: 634, unit: "câu đúng", avatar: "MA", rank: 1, streak: 12, accuracy: 90 },
      { id: "4", name: "Thu Trang", score: 598, unit: "câu đúng", avatar: "TT", rank: 2, streak: 8, accuracy: 95 },
      { id: "2", name: "Thành Hòa", score: 567, unit: "câu đúng", avatar: "TH", rank: 3, streak: 15, accuracy: 93 },
      { id: "6", name: "Lan Anh", score: 523, unit: "câu đúng", avatar: "LA", rank: 4, streak: 10, accuracy: 91 },
      { id: "3", name: "Văn Nam", score: 489, unit: "câu đúng", avatar: "VN", rank: 5, streak: 6, accuracy: 88 },
    ],
    currentUserRank: { rank: 9, score: 189, outOfTotal: 80 }
  },
  year: {
    id: "year",
    name: "Năm",
    users: [
      { id: "1", name: "Minh Anh", score: 2456, unit: "câu đúng", avatar: "MA", rank: 1, streak: 15, accuracy: 89 },
      { id: "2", name: "Thành Hòa", score: 2195, unit: "câu đúng", avatar: "TH", rank: 2, streak: 23, accuracy: 92 },
      { id: "3", name: "Văn Nam", score: 1957, unit: "câu đúng", avatar: "VN", rank: 3, streak: 12, accuracy: 87 },
      { id: "4", name: "Thu Trang", score: 1834, unit: "câu đúng", avatar: "TT", rank: 4, streak: 8, accuracy: 94 },
      { id: "5", name: "Đức Minh", score: 1672, unit: "câu đúng", avatar: "DM", rank: 5, streak: 5, accuracy: 86 },
    ],
    currentUserRank: { rank: 8, score: 523, outOfTotal: 200 }
  }
};

const periods = ["total", "week", "month", "year"];

export function Leaderboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("total");
  const { user } = useAuth();
  const currentData = leaderboardData[selectedPeriod];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />;
      case 2:
        return <Medal className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />;
      case 3:
        return <Medal className="h-3 w-3 sm:h-4 sm:w-4 text-amber-600" />;
      default:
        return <Star className="h-2 w-2 sm:h-3 sm:w-3 text-gray-400" />;
    }
  };

  const getRankBgColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-500";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-400";
      case 3:
        return "bg-gradient-to-r from-amber-500 to-amber-600";
      default:
        return "bg-gradient-to-r from-blue-500 to-purple-500";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border h-full flex flex-col">
      {/* Header - Mobile Optimized */}
      <div className="p-3 sm:p-4 border-b bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            <h3 className="font-semibold text-white text-sm sm:text-base">🏆 Bảng xếp hạng</h3>
          </div>
          <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
        </div>

        {/* Time filters - Mobile Grid */}
        <div className="grid grid-cols-4 gap-1 sm:flex sm:space-x-1">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-2 sm:px-3 py-1.5 text-xs rounded-md transition-all duration-200 font-medium ${
                selectedPeriod === period
                  ? "bg-white text-orange-600 shadow-sm"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {leaderboardData[period].name}
            </button>
          ))}
        </div>
      </div>

      {/* Leaderboard List - Mobile Optimized */}
      <div className="flex-1 p-3 sm:p-4 space-y-2 overflow-y-auto">
        {currentData.users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-100"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
              {/* Rank Icon */}
              <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                {getRankIcon(user.rank)}
              </div>
              
              {/* Avatar */}
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0 ${getRankBgColor(user.rank)}`}
              >
                {user.avatar}
              </div>
              
              {/* User Info */}
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900 text-sm truncate">
                  {user.name}
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2 text-xs text-gray-500">
                  <span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
                    S{user.streak}
                  </span>
                  <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                    {user.accuracy}%
                  </span>
                </div>
              </div>
            </div>
            
            {/* Score */}
            <div className="text-right flex-shrink-0">
              <div className="font-bold text-gray-900 text-sm sm:text-lg">
                {user.score.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500">{user.unit}</div>
            </div>
          </div>
        ))}
      </div>

      {/* User Rank Display - Mobile Optimized */}
      {currentData.currentUserRank && (
        <div className="p-3 sm:p-4">
          <div className="border-t pt-3">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 border border-blue-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-medium">{user.isLoggedIn ? user.avatar : 'ND'}</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">
                      🎯 {user.isLoggedIn ? user.name : 'Bạn'} - Hạng #{currentData.currentUserRank.rank}
                    </div>
                    <div className="text-xs text-gray-600">
                      {currentData.currentUserRank.score} câu đúng • 
                      Top {Math.round((currentData.currentUserRank.rank / currentData.currentUserRank.outOfTotal) * 100)}%
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">
                    {currentData.currentUserRank.score.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500">
                    / {currentData.currentUserRank.outOfTotal.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
