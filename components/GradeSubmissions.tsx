import { CheckCircle, Clock, AlertCircle } from "lucide-react";

const BRAND_BLUE = "#026892";

export default function GradeSubmissions() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Marks Submission Status</h1>
      </div>
      
      {/* Progress Bars */}
      <div className="mb-8 space-y-4">
        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-foreground">Computer Science</h3>
            <span className="text-lg font-bold text-foreground">98% Complete</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 mb-2">
            <div 
              className="h-2 rounded-full" 
              style={{ width: '98%', backgroundColor: BRAND_BLUE }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground font-medium">156/159 courses submitted</p>
        </div>
        
        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-foreground">Engineering</h3>
            <span className="text-lg font-bold text-foreground">92% Complete</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 mb-2">
            <div 
              className="h-2 rounded-full" 
              style={{ width: '92%', backgroundColor: BRAND_BLUE }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground font-medium">124/135 courses submitted</p>
        </div>
        
        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-foreground">Business Admin</h3>
            <span className="text-lg font-bold text-foreground">89% Complete</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 mb-2">
            <div 
              className="h-2 rounded-full" 
              style={{ width: '89%', backgroundColor: BRAND_BLUE }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground font-medium">98/110 courses submitted</p>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <h3 className="text-lg font-semibold text-foreground mb-6">Recent Activity</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 py-3 border-b border-border">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-foreground">Curriculum approved</h4>
                <p className="text-xs text-muted-foreground font-medium">Computer Science • 2 hours ago</p>
              </div>
              <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
            </div>
            
            <div className="flex items-center gap-3 py-3 border-b border-border">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-foreground">Leave request</h4>
                <p className="text-xs text-muted-foreground font-medium">Dr. Sarah Kimani • 4 hours ago</p>
              </div>
              <div className="w-6 h-6 bg-orange-50 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-orange-600" />
              </div>
            </div>
            
            <div className="flex items-center gap-3 py-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-foreground">Budget allocation</h4>
                <p className="text-xs text-muted-foreground font-medium">Engineering • 1 day ago</p>
              </div>
              <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
          <h3 className="text-lg font-semibold text-foreground mb-6">Pending Approvals</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-border">
              <div>
                <h4 className="font-semibold text-sm text-foreground">New Course Proposal</h4>
                <p className="text-xs text-muted-foreground font-medium">Mathematics</p>
              </div>
              <span className="px-2 py-1 bg-red-50 text-red-700 text-xs font-semibold rounded">High</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-border">
              <div>
                <h4 className="font-semibold text-sm text-foreground">Faculty Leave Request</h4>
                <p className="text-xs text-muted-foreground font-medium">Dr. Ann Turino</p>
              </div>
              <span className="px-2 py-1 bg-yellow-50 text-yellow-700 text-xs font-semibold rounded">Medium</span>
            </div>
            
            <div className="flex justify-between items-center py-3">
              <div>
                <h4 className="font-semibold text-sm text-foreground">Resource Allocation</h4>
                <p className="text-xs text-muted-foreground font-medium">Physics</p>
              </div>
              <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded">Low</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}