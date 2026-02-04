'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/Header'
import Footer from '@/components/Footer'
import DashboardContent from '@/components/DashboardContent'
import GradeSubmissions from '@/components/GradeSubmissions'

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  const renderContent = () => {
    switch (activeTab) {
      case 'grade-submissions':
        return <GradeSubmissions />
      default:
        return <DashboardContent />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={toggleSidebar}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      {/* Main Content */}
      <main className="lg:ml-64 pt-16 min-h-screen">
        {renderContent()}
        <Footer />
      </main>
    </div>
  )
}