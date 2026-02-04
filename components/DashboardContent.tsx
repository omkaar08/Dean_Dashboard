'use client'

import { Users, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { useState } from "react";

const BRAND_BLUE = "#026892";

export default function DashboardContent() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dean Dashboard</h1>
        <p className="text-muted-foreground font-medium">Welcome back! Here's what's happening across your school.</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <p className="text-gray-900 text-sm font-semibold">Faculty Members</p>
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-blue-600" />
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 mb-1">45</p>
            <p className="text-green-700 text-xs font-medium">5% Current Semester</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <p className="text-gray-900 text-sm font-semibold">Enrolled Students</p>
            <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-green-600" />
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 mb-1">1,234</p>
            <p className="text-green-700 text-xs font-medium">3% from last academic year</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <p className="text-gray-900 text-sm font-semibold">Pending Approvals</p>
            <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-orange-600" />
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 mb-1">23</p>
            <p className="text-orange-700 text-xs font-medium">High priority</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <p className="text-gray-900 text-sm font-semibold">Total Departments</p>
            <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 mb-1">4</p>
            <p className="text-green-700 text-xs font-medium">Active departments</p>
          </div>
        </div>
      </div>

      {/* Bottom Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Quick Actions */}
        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <h3 className="text-lg font-semibold text-foreground mb-6">Quick Actions</h3>
          
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 cursor-pointer transition-colors flex items-center gap-3">
              <div className="w-5 h-5 text-[#026892]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h4 className="font-semibold text-sm text-[#026892]">Approve Curriculum</h4>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 cursor-pointer transition-colors flex items-center gap-3">
              <div className="w-5 h-5 text-[#026892]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-sm text-[#026892]">Faculty Reports</h4>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 cursor-pointer transition-colors flex items-center gap-3">
              <div className="w-5 h-5 text-orange-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <h4 className="font-semibold text-sm text-orange-600">Budget Allocation</h4>
            </div>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <h3 className="text-lg font-semibold text-foreground mb-6">Today's Schedule</h3>
          
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-sm text-foreground">Faculty Meeting</h4>
                <p className="text-xs text-muted-foreground font-medium">Conference Room A • 09:00-11:00</p>
              </div>
              <span 
                className="px-3 py-1 text-white text-xs font-medium rounded-full"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                Next
              </span>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-sm text-foreground">Budget Review</h4>
                <p className="text-xs text-muted-foreground font-medium">Dean's Office • 14:00-16:00</p>
              </div>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
                Later
              </span>
            </div>
          </div>
        </div>

        {/* School Performance */}
        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <h3 className="text-lg font-semibold text-foreground mb-6">School Performance</h3>
          
          <div className="space-y-3">
            <div className="p-4 bg-green-50 rounded-lg flex justify-between items-center">
              <span className="text-foreground font-medium text-sm">Average Attendance</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-sm">87%</span>
              </div>
            </div>
            
            <div className="p-4 bg-red-50 rounded-lg flex justify-between items-center">
              <span className="text-foreground font-medium text-sm">Pending Grades</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="font-semibold text-sm">12</span>
              </div>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg flex justify-between items-center">
              <span className="text-foreground font-medium text-sm">Faculty Alerts</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="font-semibold text-sm">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marks Submission Status and Recent Activity Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Marks Submission Status */}
        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <h3 className="text-lg font-semibold text-foreground mb-6">Marks Submission Status</h3>
          
          <div className="space-y-2">
            <div className="hover:bg-gray-50 rounded-lg p-2 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-sm text-foreground">Computer Science</h4>
                <span className="text-sm font-bold text-foreground">98% Complete</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2 mb-1">
                <div 
                  className="h-2 rounded-full transition-all duration-300 hover:opacity-80" 
                  style={{ width: '98%', backgroundColor: BRAND_BLUE }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground font-medium">156/159 courses submitted</p>
            </div>
            
            <div className="hover:bg-gray-50 rounded-lg p-2 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-sm text-foreground">Engineering</h4>
                <span className="text-sm font-bold text-foreground">92% Complete</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2 mb-1">
                <div 
                  className="h-2 rounded-full transition-all duration-300 hover:opacity-80" 
                  style={{ width: '92%', backgroundColor: BRAND_BLUE }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground font-medium">124/135 courses submitted</p>
            </div>
            
            <div className="hover:bg-gray-50 rounded-lg p-2 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-sm text-foreground">Business Admin</h4>
                <span className="text-sm font-bold text-foreground">89% Complete</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2 mb-1">
                <div 
                  className="h-2 rounded-full transition-all duration-300 hover:opacity-80" 
                  style={{ width: '89%', backgroundColor: BRAND_BLUE }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground font-medium">98/110 courses submitted</p>
            </div>
            
            <div className="hover:bg-gray-50 rounded-lg p-2 transition-colors cursor-pointer">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-sm text-foreground">Medicine</h4>
                <span className="text-sm font-bold text-foreground">85% Complete</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2 mb-1">
                <div 
                  className="h-2 rounded-full transition-all duration-300 hover:opacity-80" 
                  style={{ width: '85%', backgroundColor: BRAND_BLUE }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground font-medium">68/80 courses submitted</p>
            </div>
          </div>
        </div>

        {/* Academic Calendar */}
        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-foreground">Academic Calendar</h3>
            <div className="flex gap-1">
              <button 
                onClick={() => navigateMonth('prev')}
                className="p-1 hover:bg-secondary rounded text-muted-foreground"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => navigateMonth('next')}
                className="p-1 hover:bg-secondary rounded text-muted-foreground"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <h4 className="text-sm font-medium text-muted-foreground mb-3">
            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h4>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {/* Day Headers */}
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div key={i} className="text-center text-xs font-medium text-muted-foreground py-1">{day}</div>
            ))}
            
            {(() => {
              const today = new Date();
              const currentMonth = currentDate.getMonth();
              const currentYear = currentDate.getFullYear();
              const firstDay = new Date(currentYear, currentMonth, 1);
              const lastDay = new Date(currentYear, currentMonth + 1, 0);
              const daysInMonth = lastDay.getDate();
              const startingDayOfWeek = firstDay.getDay();
              
              const days = [];
              
              // Previous month days
              const prevMonth = new Date(currentYear, currentMonth - 1, 0);
              for (let i = startingDayOfWeek - 1; i >= 0; i--) {
                days.push(
                  <div key={`prev-${prevMonth.getDate() - i}`} className="text-center text-xs text-gray-300 py-1 h-7 flex items-center justify-center">
                    {prevMonth.getDate() - i}
                  </div>
                );
              }
              
              // Current month days
              for (let day = 1; day <= daysInMonth; day++) {
                const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
                const hasEvent = day === 15 || day === 20;
                const isHoliday = day === 25;
                
                days.push(
                  <div key={day} className={`text-center text-xs cursor-pointer transition-all relative h-7 flex items-center justify-center rounded ${
                    isToday ? 'bg-[#026892] text-white font-bold shadow-md' :
                    hasEvent ? 'bg-blue-50 text-[#026892] font-semibold hover:bg-blue-100' : 
                    isHoliday ? 'bg-orange-50 text-orange-600 font-semibold hover:bg-orange-100' : 
                    'text-foreground hover:bg-gray-100'
                  }`}>
                    {day}
                    {hasEvent && !isToday && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-[#026892]"></div>
                    )}
                    {isHoliday && !isToday && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500"></div>
                    )}
                  </div>
                );
              }
              
              // Next month days to fill grid
              const totalCells = Math.ceil((startingDayOfWeek + daysInMonth) / 7) * 7;
              const remainingCells = totalCells - (startingDayOfWeek + daysInMonth);
              for (let day = 1; day <= remainingCells; day++) {
                days.push(
                  <div key={`next-${day}`} className="text-center text-xs text-gray-300 py-1 h-7 flex items-center justify-center">
                    {day}
                  </div>
                );
              }
              
              return days;
            })()}
          </div>
          
          {/* Events Summary */}
          <div className="space-y-2 mb-3">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#026892]"></div>
                <span className="text-muted-foreground font-medium">Faculty Meeting</span>
              </div>
              <span className="text-xs text-muted-foreground">Dec 15</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#026892]"></div>
                <span className="text-muted-foreground font-medium">Grade Deadline</span>
              </div>
              <span className="text-xs text-muted-foreground">Dec 20</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <span className="text-muted-foreground font-medium">Christmas Holiday</span>
              </div>
              <span className="text-xs text-muted-foreground">Dec 25</span>
            </div>
          </div>
          
          <button className="w-full text-center text-xs text-[#026892] hover:underline font-medium py-2 border-t border-border">
            View Full Calendar
          </button>
        </div>
      </div>
    </div>
  );
}