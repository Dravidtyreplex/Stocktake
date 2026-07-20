import React, { useState } from 'react';
import {
  ArrowLeft,
  BarChart2,
  Store,
  IndianRupee,
  Package,
  CheckSquare,
  PlusCircle,
  ClipboardCheck,
  Plus,
  X,
  ShoppingCart,
  LayoutGrid,
  ScanBarcode,
  Minus,
  Search,
  Filter,
  Check,
  Camera,
  Save,
  Tag,
  Layers,
  Settings2,
  History,
  Clock,
  Calendar,
  AlertCircle,
  CheckCircle2,
  FileText,
  ChevronRight,
  Send,
  User,
  MapPin,
  Bell,
  Shapes,
  Car,
  Aperture
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<'home' | 'stockTick' | 'addTyre' | 'history'>('home');
  const [syncEnabled, setSyncEnabled] = useState(true);
  const [showSyncDisableModal, setShowSyncDisableModal] = useState(false);
  const [historyData, setHistoryData] = useState([
    { id: 'AUD-1048', month: 'Mar', day: '23', time: '10:30 AM', group: 'today', label: 'Morning Audit', items: 10, matched: 8, discrepancies: 2, status: 'review', manager: 'Dravid S.', duration: '45 min', location: 'Main Warehouse' },
    { id: 'AUD-1047', month: 'Mar', day: '22', time: '10:15 AM', group: 'yesterday', label: 'Daily Count', items: 10, matched: 10, discrepancies: 0, status: 'approved', manager: 'Dravid S.', duration: '40 min', location: 'Main Warehouse' },
    { id: 'AUD-1046', month: 'Mar', day: '21', time: '11:00 AM', group: 'thisWeek', label: 'Daily Count', items: 10, matched: 9, discrepancies: 1, status: 'approved', manager: 'Mike T.', duration: '38 min', location: 'Main Warehouse' },
    { id: 'AUD-1045', month: 'Mar', day: '20', time: '09:45 AM', group: 'thisWeek', label: 'Daily Count', items: 10, matched: 10, discrepancies: 0, status: 'approved', manager: 'Dravid S.', duration: '42 min', location: 'Main Warehouse' },
    { id: 'AUD-1044', month: 'Mar', day: '19', time: '10:00 AM', group: 'thisWeek', label: 'Daily Count', items: 10, matched: 8, discrepancies: 2, status: 'approved', manager: 'Sarah J.', duration: '50 min', location: 'Main Warehouse' },
    { id: 'AUD-1043', month: 'Mar', day: '18', time: '10:30 AM', group: 'thisWeek', label: 'Daily Count', items: 10, matched: 10, discrepancies: 0, status: 'approved', manager: 'Dravid S.', duration: '35 min', location: 'Main Warehouse' },
    { id: 'AUD-1042', month: 'Mar', day: '17', time: '09:30 AM', group: 'lastWeek', label: 'Daily Count', items: 10, matched: 10, discrepancies: 0, status: 'approved', manager: 'Mike T.', duration: '55 min', location: 'Main Warehouse' },
    { id: 'AUD-1041', month: 'Mar', day: '16', time: '10:45 AM', group: 'lastWeek', label: 'Daily Count', items: 10, matched: 9, discrepancies: 1, status: 'approved', manager: 'Dravid S.', duration: '48 min', location: 'Back Storage' },
  ]);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        `}
      </style>
      <div 
        className="min-h-screen bg-[#f8f9fa] flex justify-center items-center py-8 px-4"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <div className="w-full max-w-[400px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden relative h-[850px] flex flex-col border-[8px] border-[#111827]">
        
        {currentScreen === 'home' ? (
          <>
            {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-white z-10 border-b border-[#e5e7eb]">
          <button className="text-[#000000] hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          <h1 className="text-[18px] font-normal text-[#000000]">Inventory Summary</h1>
          <button 
            onClick={() => setCurrentScreen('history')}
            className="text-[#000000] hover:bg-slate-100 rounded-full transition-colors"
          >
            <History className="w-6 h-6 stroke-[2]" />
          </button>
        </div>

        {/* Sync Toggle Row */}
        <button
          onClick={() => {
            if (syncEnabled) {
              setShowSyncDisableModal(true);
            } else {
              setSyncEnabled(true);
            }
          }}
          className={`flex items-center justify-between w-full px-5 py-3 border-b transition-all duration-200 ${
            syncEnabled ? 'bg-[#f0fdf4] border-[#bbf7d0]' : 'bg-[#fff1f2] border-[#ffe4e6]'
          }`}
        >
          <div className="flex items-start gap-2.5 max-w-[80%]">
            <div className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 transition-colors duration-200 ${
              syncEnabled ? 'bg-[#22c55e]' : 'bg-[#ef4444] animate-pulse'
            }`} />
            <div className="flex flex-col items-start text-left">
              <span className={`text-[13px] font-bold transition-colors duration-200 ${
                syncEnabled ? 'text-[#15803d]' : 'text-[#b91c1c]'
              }`}>
                {syncEnabled ? 'Sync is ON — Inventory live' : 'Sync is OFF'}
              </span>
              {!syncEnabled && (
                <span className="text-[10px] font-medium text-[#991b1b] mt-0.5 leading-normal">
                  Without Backup, your data is at risk.
                </span>
              )}
            </div>
          </div>
          {/* Pill toggle */}
          <div className={`relative w-11 h-6 rounded-full shrink-0 transition-colors duration-300 ${
            syncEnabled ? 'bg-[#22c55e]' : 'bg-[#d1d5db]'
          }`}>
            <div className={`absolute top-[3px] w-[18px] h-[18px] bg-white rounded-full shadow-sm transition-all duration-300 ${
              syncEnabled ? 'left-[22px]' : 'left-[3px]'
            }`} />
          </div>
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24 px-5 pt-5 custom-scrollbar relative">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3.5 mb-5">
            {/* Card 1: Quantity */}
            <div className="border border-[#e5e7eb] rounded-2xl p-4 shadow-sm bg-white">
              <div className="flex justify-between items-start mb-3">
                <div className="bg-[#fff4ed] p-2 rounded-[10px] text-[#ff6b00]">
                  <Store className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-[11px] font-medium text-[#ff6b00]">Quantity</span>
              </div>
              <h2 className="text-[24px] font-bold text-[#000000] leading-none tracking-tight">96</h2>
              <p className="text-[12px] text-[#627085] mt-1.5 font-medium">In Hand Stock</p>
            </div>
            
            {/* Card 2: Total Amount */}
            <div className="border border-[#e5e7eb] rounded-2xl p-4 shadow-sm bg-white">
              <div className="flex justify-between items-start mb-3">
                <div className="bg-[#effff4] p-2 rounded-[10px] text-[#00b633]">
                  <IndianRupee className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-[11px] font-medium text-[#00b633] text-right leading-tight">Total<br/>Amount</span>
              </div>
              <h2 className="text-[24px] font-bold text-[#000000] leading-none tracking-tight">₹4,50,671</h2>
              <p className="text-[12px] text-[#627085] mt-1.5 font-medium">Inventory Worth</p>
            </div>
            
            {/* Card 3: SKU */}
            <div className="border border-[#e5e7eb] rounded-2xl p-4 shadow-sm bg-white">
              <div className="flex justify-between items-start mb-3">
                <div className="bg-[#f0f5ff] p-2 rounded-[10px] text-[#0066ff]">
                  <Package className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-[11px] font-medium text-[#0066ff]">SKU</span>
              </div>
              <h2 className="text-[24px] font-bold text-[#000000] leading-none tracking-tight">45</h2>
              <p className="text-[12px] text-[#627085] mt-1.5 font-medium">Available SKU's</p>
            </div>
            
            {/* Card 4: Brands */}
            <div className="border border-[#e5e7eb] rounded-2xl p-4 shadow-sm bg-white">
              <div className="flex justify-between items-start mb-3">
                <div className="bg-[#f4f0ff] p-2 rounded-[10px] text-[#7b4dff]">
                  <CheckSquare className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-[11px] font-medium text-[#7b4dff]">Brands</span>
              </div>
              <h2 className="text-[24px] font-bold text-[#000000] leading-none tracking-tight">19</h2>
              <p className="text-[12px] text-[#627085] mt-1.5 font-medium">Brands In Stock</p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-1.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#000000]"></div>
            <div className="w-2 h-2 rounded-full bg-[#e5e7eb]"></div>
          </div>

          {/* Popular Sizes */}
          <div className="mb-8">
            <h3 className="text-[18px] font-normal text-[#000000] mb-4">Popular Sizes</h3>
            
            {/* Vehicle Type Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-1 mb-4 custom-scrollbar">
              <button className="whitespace-nowrap px-4 py-2 border border-[#111827] text-[#000000] rounded-lg text-[14px] font-medium bg-white">
                Four Wheeler (29)
              </button>
              <button className="whitespace-nowrap px-4 py-2 border border-[#e5e7eb] text-[#627085] rounded-lg text-[14px] font-medium bg-white">
                Two Wheeler (8)
              </button>
              <button className="whitespace-nowrap px-4 py-2 border border-[#e5e7eb] text-[#627085] rounded-lg text-[14px] font-medium bg-white">
                Others (8)
              </button>
            </div>

            <div className="space-y-3">
              {/* Item 1 */}
              <div className="border border-[#e5e7eb] rounded-2xl p-4 flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <button className="w-6 h-6 rounded-full bg-[#ef4444] text-white flex items-center justify-center">
                    <span className="text-lg leading-none mb-0.5">+</span>
                  </button>
                  <div>
                    <p className="text-[14px] text-[#627085] mb-0.5">185-65-15</p>
                    <p className="text-[14px] font-bold text-[#000000]">1 Brands</p>
                  </div>
                </div>
                <div className="flex gap-6 text-left">
                  <div>
                    <p className="text-[12px] text-[#627085] mb-0.5 font-medium">Quantity</p>
                    <p className="text-[14px] font-bold text-[#000000]">5</p>
                  </div>
                  <div>
                    <p className="text-[12px] text-[#627085] mb-0.5 font-medium">Total Value</p>
                    <p className="text-[14px] font-bold text-[#000000]">₹7,500</p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="border border-[#e5e7eb] rounded-2xl p-4 flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <button className="w-6 h-6 rounded-full bg-[#ef4444] text-white flex items-center justify-center">
                    <span className="text-lg leading-none mb-0.5">+</span>
                  </button>
                  <div>
                    <p className="text-[14px] text-[#627085] mb-0.5">235-60-18</p>
                    <p className="text-[14px] font-bold text-[#000000]">1 Brands</p>
                  </div>
                </div>
                <div className="flex gap-6 text-left">
                  <div>
                    <p className="text-[12px] text-[#627085] mb-0.5 font-medium">Quantity</p>
                    <p className="text-[14px] font-bold text-[#000000]">5</p>
                  </div>
                  <div>
                    <p className="text-[12px] text-[#627085] mb-0.5 font-medium">Total Value</p>
                    <p className="text-[14px] font-bold text-[#000000]">₹11,000</p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="border border-[#e5e7eb] rounded-2xl p-4 flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <button className="w-6 h-6 rounded-full bg-[#ef4444] text-white flex items-center justify-center">
                    <span className="text-lg leading-none mb-0.5">+</span>
                  </button>
                  <div>
                    <p className="text-[14px] text-[#627085] mb-0.5">205-65-16</p>
                    <p className="text-[14px] font-bold text-[#000000]">1 Brands</p>
                  </div>
                </div>
                <div className="flex gap-6 text-left">
                  <div>
                    <p className="text-[12px] text-[#627085] mb-0.5 font-medium">Quantity</p>
                    <p className="text-[14px] font-bold text-[#000000]">5</p>
                  </div>
                  <div>
                    <p className="text-[12px] text-[#627085] mb-0.5 font-medium">Total Value</p>
                    <p className="text-[14px] font-bold text-[#000000]">₹11,500</p>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="border border-[#e5e7eb] rounded-2xl p-4 flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <button className="w-6 h-6 rounded-full bg-[#ef4444] text-white flex items-center justify-center">
                    <span className="text-lg leading-none mb-0.5">+</span>
                  </button>
                  <div>
                    <p className="text-[14px] text-[#627085] mb-0.5">175-65-14</p>
                    <p className="text-[14px] font-bold text-[#000000]">2 Brands</p>
                  </div>
                </div>
                <div className="flex gap-6 text-left">
                  <div>
                    <p className="text-[12px] text-[#627085] mb-0.5 font-medium">Quantity</p>
                    <p className="text-[14px] font-bold text-[#000000]">5</p>
                  </div>
                  <div>
                    <p className="text-[12px] text-[#627085] mb-0.5 font-medium">Total Value</p>
                    <p className="text-[14px] font-bold text-[#000000]">₹24,243</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Fixed Bar */}
        <div className="absolute bottom-0 left-0 right-0 flex bg-white rounded-b-[2rem] overflow-hidden border-t border-[#e5e7eb] p-4 gap-3 z-20">
          <button 
            onClick={() => setCurrentScreen('addTyre')}
            className="flex-1 py-3.5 bg-[#ef4444] text-white rounded-xl font-bold text-[15px] transition-colors hover:bg-[#dc2626] flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(239,68,68,0.25)]"
          >
            <Plus className="w-5 h-5 stroke-[2.5]" />
            Add Tyre
          </button>
          <button 
            onClick={() => setIsActionMenuOpen(true)}
            className="w-[52px] h-[52px] flex-shrink-0 bg-white border-2 border-[#e5e7eb] text-[#000000] rounded-xl flex items-center justify-center transition-colors hover:bg-slate-50 active:scale-[0.98]"
          >
            <LayoutGrid className="w-6 h-6" />
          </button>
        </div>
        
        {/* Action Menu Overlay */}
        {isActionMenuOpen && (
          <div className="absolute inset-0 z-30 flex flex-col justify-end rounded-[2.5rem] overflow-hidden">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-[#000000]/40 backdrop-blur-sm transition-opacity"
              onClick={() => setIsActionMenuOpen(false)}
            ></div>
            
            {/* Menu Panel */}
            <div 
              className="relative rounded-t-[2rem] bg-white p-6 pb-8"
              style={{ animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-[20px] font-bold text-[#000000]">More Actions</h3>
                <button 
                  onClick={() => setIsActionMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-[#627085] hover:text-[#000000] transition-colors"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
              
              <div className="flex flex-col gap-2.5">
                <button className="flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-2xl active:scale-[0.98] transition-transform">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#ef4444] text-[#ef4444]">
                    <ShoppingCart className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[16px] font-bold text-[#000000]">Sell Tyre</p>
                    <p className="text-[12px] text-[#627085] font-medium">Record a new sale</p>
                  </div>
                </button>

                <button 
                  onClick={() => { setIsActionMenuOpen(false); setCurrentScreen('stockTick'); }}
                  className="flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-2xl active:scale-[0.98] transition-transform"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#ef4444] text-[#ef4444]">
                    <ClipboardCheck className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[16px] font-bold text-[#000000]">Stock Take</p>
                    <p className="text-[12px] text-[#627085] font-medium">Audit your inventory</p>
                  </div>
                </button>

                <button 
                  onClick={() => { setIsActionMenuOpen(false); setCurrentScreen('history'); }}
                  className="flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-2xl active:scale-[0.98] transition-transform"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#ef4444] text-[#ef4444]">
                    <History className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[16px] font-bold text-[#000000]">Audit History</p>
                    <p className="text-[12px] text-[#627085] font-medium">View past stock takes</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sync Disable Confirmation Modal */}
        {showSyncDisableModal && (
          <div className="absolute inset-0 z-40 flex items-center justify-center rounded-[2.5rem] overflow-hidden p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-[#000000]/50 backdrop-blur-xs transition-opacity"
              onClick={() => setShowSyncDisableModal(false)}
            ></div>
            
            {/* Modal Card */}
            <div 
              className="relative w-full max-w-[320px] bg-white rounded-3xl p-5 shadow-2xl border border-[#e5e7eb] flex flex-col"
              style={{ animation: 'scaleUp 0.2s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              {/* Header */}
              <div className="text-center mb-4">
                <div className="w-11 h-11 bg-[#fff1f2] border border-[#ffe4e6] text-[#ef4444] rounded-full flex items-center justify-center mx-auto mb-2.5">
                  <AlertCircle className="w-5.5 h-5.5 stroke-[2.5]" />
                </div>
                <h3 className="text-[17px] font-bold text-[#111827] tracking-tight">Disable TyrePlex Cloud Sync?</h3>
              </div>

              {/* Grid Comparison */}
              <div className="border border-[#e5e7eb] rounded-2xl overflow-hidden mb-3.5 text-[12px] bg-[#fafafa]">
                {/* Header */}
                <div className="grid grid-cols-12 bg-[#f3f4f6] border-b border-[#e5e7eb] font-bold text-[#374151] items-stretch">
                  <div className="col-span-6 text-left px-3.5 py-2 flex items-center">Feature</div>
                  <div className="col-span-3 text-center text-[#15803d] bg-[#dcfce7] py-2 flex items-center justify-center text-[11px]">Sync ON</div>
                  <div className="col-span-3 text-center text-[#ef4444] py-2 flex items-center justify-center text-[11px]">Sync OFF</div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-[#e5e7eb]">
                  <div className="grid grid-cols-12 items-stretch font-medium text-[#4b5563]">
                    <div className="col-span-6 text-left leading-tight px-3.5 py-2.5 flex items-center">Real-time TyrePlex Cloud Backup</div>
                    <div className="col-span-3 flex justify-center items-center bg-[#f0fdf4] py-2.5">
                      <span className="w-4 h-4 bg-[#effff4] text-[#22c55e] border border-[#bbf7d0] rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                    </div>
                    <div className="col-span-3 flex justify-center items-center py-2.5">
                      <span className="w-4 h-4 bg-[#fef2f2] text-[#ef4444] border border-[#fecaca] rounded-full flex items-center justify-center text-[9px] font-bold">✕</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 items-stretch font-medium text-[#4b5563]">
                    <div className="col-span-6 text-left leading-tight px-3.5 py-2.5 flex items-center">Multi-Device Sync</div>
                    <div className="col-span-3 flex justify-center items-center bg-[#f0fdf4] py-2.5">
                      <span className="w-4 h-4 bg-[#effff4] text-[#22c55e] border border-[#bbf7d0] rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                    </div>
                    <div className="col-span-3 flex justify-center items-center py-2.5">
                      <span className="w-4 h-4 bg-[#fef2f2] text-[#ef4444] border border-[#fecaca] rounded-full flex items-center justify-center text-[9px] font-bold">✕</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 items-stretch font-medium text-[#4b5563]">
                    <div className="col-span-6 text-left leading-tight px-3.5 py-2.5 flex items-center">Instant Auto-Save</div>
                    <div className="col-span-3 flex justify-center items-center bg-[#f0fdf4] py-2.5">
                      <span className="w-4 h-4 bg-[#effff4] text-[#22c55e] border border-[#bbf7d0] rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                    </div>
                    <div className="col-span-3 flex justify-center items-center py-2.5">
                      <span className="w-4 h-4 bg-[#fef2f2] text-[#ef4444] border border-[#fecaca] rounded-full flex items-center justify-center text-[9px] font-bold">✕</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 items-stretch font-medium text-[#4b5563]">
                    <div className="col-span-6 text-left leading-tight px-3.5 py-2.5 flex items-center">Live Inventory Updates</div>
                    <div className="col-span-3 flex justify-center items-center bg-[#f0fdf4] py-2.5">
                      <span className="w-4 h-4 bg-[#effff4] text-[#22c55e] border border-[#bbf7d0] rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                    </div>
                    <div className="col-span-3 flex justify-center items-center py-2.5">
                      <span className="w-4 h-4 bg-[#fef2f2] text-[#ef4444] border border-[#fecaca] rounded-full flex items-center justify-center text-[9px] font-bold">✕</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 items-stretch font-medium text-[#4b5563]">
                    <div className="col-span-6 text-left leading-tight px-3.5 py-2.5 flex items-center">Offline Mode Support</div>
                    <div className="col-span-3 flex justify-center items-center bg-[#f0fdf4] py-2.5">
                      <span className="w-4 h-4 bg-[#effff4] text-[#22c55e] border border-[#bbf7d0] rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                    </div>
                    <div className="col-span-3 flex justify-center items-center py-2.5">
                      <span className="w-4 h-4 bg-[#effff4] text-[#22c55e] border border-[#bbf7d0] rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info footer text */}
              <p className="text-[11px] text-[#b91c1c] font-semibold text-center mb-4 bg-[#fff1f2] p-2.5 rounded-xl border border-[#ffe4e6] leading-normal">
                Without Backup, your data stays on this device and is at risk of loss.
              </p>

              {/* Actions */}
              <div className="flex gap-2.5">
                <button 
                  onClick={() => setShowSyncDisableModal(false)}
                  className="flex-1 py-2.5 border border-[#d1d5db] text-[#374151] rounded-xl font-bold text-[14px] hover:bg-slate-50 transition-colors active:scale-[0.98]"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    setSyncEnabled(false);
                    setShowSyncDisableModal(false);
                  }}
                  className="flex-1 py-2.5 bg-[#ef4444] text-white rounded-xl font-bold text-[14px] hover:bg-[#dc2626] transition-colors active:scale-[0.98] shadow-sm"
                >
                  Disable
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Custom Scrollbar Visual (Overlay) */}
        <div className="absolute right-0 top-[88px] bottom-[72px] w-3 bg-transparent pointer-events-none flex justify-center">
          <div className="w-2 h-[45%] bg-[#627085] rounded-full mt-2"></div>
        </div>
          </>
        ) : currentScreen === 'history' ? (
          <HistoryScreen 
            onBack={() => setCurrentScreen('home')} 
            onReAudit={() => setCurrentScreen('stockTick')} 
            historyData={historyData}
          />
        ) : currentScreen === 'stockTick' ? (
          <StockTickScreen 
            onBack={() => setCurrentScreen('home')} 
            onAddTyre={() => setCurrentScreen('addTyre')}
            onFinish={() => setCurrentScreen('history')}
            historyData={historyData}
            setHistoryData={setHistoryData}
          />
        ) : (
          <AddTyreScreen onBack={() => setCurrentScreen('stockTick')} />
        )}

      </div>
      </div>
    </>
  );
}

function StockTickScreen({ onBack, onAddTyre, onFinish, historyData, setHistoryData }: { 
  onBack: () => void, 
  onAddTyre: () => void, 
  onFinish: () => void,
  historyData: any[],
  setHistoryData: React.Dispatch<React.SetStateAction<any[]>>
}) {
  const [mode, setMode] = useState<'select' | 'brands' | 'vehicle' | 'oldTyres'>('select');
  const [oldCarCount, setOldCarCount] = useState('0');
  const [oldBikeCount, setOldBikeCount] = useState('0');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTab, setFilterTab] = useState<'matched' | 'discrepancy' | 'pending'>('pending');
  const [expandedBrand, setExpandedBrand] = useState<string | null>(null);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [summaryFilter, setSummaryFilter] = useState<'all' | 'matched' | 'discrepancy'>('all');
  const [simulateEmpty, setSimulateEmpty] = useState(false);
  const [confirmedBrands, setConfirmedBrands] = useState<string[]>([]);
  const [showManualAdd, setShowManualAdd] = useState<string | null>(null);
  const [isAddTyreOpen, setIsAddTyreOpen] = useState(false);
  const [sheetQty, setSheetQty] = useState(1);
  const [sheetCondition, setSheetCondition] = useState('New');

  const mockData = [
    { id: 1, brand: 'MRF', model: '4G', size: '165/80/R14', expected: 50, counted: null as number | null, category: 'Four Wheeler' },
    { id: 2, brand: 'MRF', model: '4G', size: '175/80/R14', expected: 150, counted: null as number | null, category: 'Four Wheeler' },
    { id: 3, brand: 'MRF', model: 'ZLX', size: '155/80/R13', expected: 12, counted: null as number | null, category: 'Four Wheeler' },
    { id: 4, brand: 'CEAT', model: 'Milaze X3', size: '165/70/R14', expected: 8, counted: null as number | null, category: 'Four Wheeler' },
    { id: 5, brand: 'CEAT', model: 'SecuraDrive', size: '205/60/R16', expected: 9, counted: null as number | null, category: 'Four Wheeler' },
    { id: 6, brand: 'Apollo', model: 'Amazer 4G', size: '145/80/R12', expected: 15, counted: null as number | null, category: 'Four Wheeler' },
    { id: 7, brand: 'Apollo', model: 'Alnac 4GS', size: '205/55/R16', expected: 45, counted: null as number | null, category: 'Four Wheeler' },
    { id: 8, brand: 'Michelin', model: 'Energy XM2', size: '185/65/R15', expected: 6, counted: null as number | null, category: 'Four Wheeler' },
    { id: 9, brand: 'Bridgestone', model: 'B290', size: '195/55/R16', expected: 10, counted: null as number | null, category: 'Four Wheeler' },
    { id: 10, brand: 'JK Tyre', model: 'Blaze', size: '90/90/R12', expected: 20, counted: null as number | null, category: 'Two Wheeler' },
  ];

  const [inventory, setInventory] = useState(simulateEmpty ? [] as typeof mockData : mockData);

  const getStatus = (item: typeof mockData[0]) => {
    if (item.counted === null) return 'pending';
    return item.counted === item.expected ? 'matched' : 'discrepancy';
  };

  const brands = [...new Set(inventory.map(i => i.brand))];
  const categories = [...new Set(inventory.map(i => i.category))];

  // Temporary counts while editing (not committed until Confirm)
  const [tempCounts, setTempCounts] = useState<Record<number, string>>({});

  const handleCountChange = (id: number, value: string) => {
    setTempCounts(prev => ({ ...prev, [id]: value }));
  };

  const handleConfirmBrand = (group: string) => {
    const groupItems = inventory.filter(i => (i as any)[groupKey] === group);
    setInventory(inv => inv.map(item => {
      if ((item as any)[groupKey] === group && tempCounts[item.id] !== undefined) {
        const val = tempCounts[item.id];
        const num = val === '' ? null : parseInt(val);
        return { ...item, counted: num };
      }
      return item;
    }));
    // Clear temp counts for this group
    const newTemp = { ...tempCounts };
    groupItems.forEach(i => delete newTemp[i.id]);
    setTempCounts(newTemp);
    setConfirmedBrands(prev => [...prev, group]);
    setExpandedBrand(null);
  };

  const getFilteredItems = (items: typeof inventory) => {
    return items.filter(item => {
      const matchesSearch = searchQuery === '' || 
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.size.includes(searchQuery);
      return matchesSearch;
    });
  };

  const totalItems = inventory.length;
  const matchedItems = inventory.filter(i => getStatus(i) === 'matched').length;
  const unmatchedItems = inventory.filter(i => getStatus(i) === 'discrepancy').length;
  const pendingItems = inventory.filter(i => getStatus(i) === 'pending').length;

  // Empty state - no inventory
  if (inventory.length === 0) {
    return (
      <div className="flex flex-col h-full relative rounded-[2.5rem] overflow-hidden bg-[#f8f9fa]">
        <div className="flex items-center justify-between px-6 py-5 bg-white z-10 border-b border-[#e5e7eb] shrink-0">
          <button onClick={onBack} aria-label="Go back" className="text-[#000000] hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          <h1 className="text-[18px] font-bold text-[#000000] tracking-tight">Stock Take</h1>
          <div className="flex items-center bg-[#f3f4f6] p-0.5 rounded-lg border border-[#e5e7eb] shrink-0">
            <button onClick={() => { setSimulateEmpty(false); setInventory(mockData); }} className="px-2 py-1 text-[9px] font-bold text-[#627085] hover:text-[#000000] rounded transition-colors">Data</button>
            <button className="px-2 py-1 text-[9px] font-bold bg-[#ef4444] text-white rounded shadow-sm">Empty</button>
          </div>
        </div>

        <div className="flex-1 px-5 pt-5 pb-8 overflow-y-auto custom-scrollbar flex flex-col gap-5">
          {/* Empty Banner Card */}
          <div className="bg-white border border-[#e5e7eb] rounded-[1.5rem] p-6 flex flex-col items-center justify-center text-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#fef2f2] flex items-center justify-center mb-4">
              <Package className="w-8 h-8 text-[#ef4444] stroke-[1.5]" />
            </div>
            <h2 className="text-[18px] font-bold text-[#000000] mb-2">No Inventory Yet</h2>
            <p className="text-[13px] text-[#627085] leading-relaxed mb-6">Add your tyres to start doing stock take. You can add them manually or upload from a file.</p>
            <button 
              onClick={() => setIsAddTyreOpen(true)}
              className="w-full py-3.5 bg-[#ef4444] hover:bg-[#dc2626] text-white rounded-xl font-bold text-[14px] shadow-[0_4px_12px_rgba(239,68,68,0.20)] active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
            >
              <Plus className="w-4.5 h-4.5 stroke-[2.5]" />
              Add Tyre Manually
            </button>
          </div>

          {/* Onboarding Steps for Empty State */}
          <div className="bg-white border border-[#e5e7eb] rounded-[1.5rem] p-5 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#000000] mb-4 flex items-center gap-2">
              <ClipboardCheck className="w-4.5 h-4.5 text-[#ef4444]" />
              How Stock Take works
            </h3>
            
            <div className="relative pl-1">
              <div className="absolute left-[13px] top-6 bottom-6 w-0.5 bg-[#fef2f2]"></div>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5 relative z-10">
                  <div className="w-7 h-7 rounded-full bg-[#fef2f2] border border-[#fecaca] text-[#ef4444] font-bold text-[11px] flex items-center justify-center shrink-0 shadow-sm">
                    1
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#000000] mb-0.5">Maintain Physical Quantity</p>
                    <p className="text-[11px] text-[#627085] leading-relaxed">Count your actual stock to keep records accurate</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 relative z-10">
                  <div className="w-7 h-7 rounded-full bg-[#fef2f2] border border-[#fecaca] text-[#ef4444] font-bold text-[11px] flex items-center justify-center shrink-0 shadow-sm">
                    2
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#000000] mb-0.5">Audit by Brand or Vehicle</p>
                    <p className="text-[11px] text-[#627085] leading-relaxed">Choose how you want to organize your count</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 relative z-10">
                  <div className="w-7 h-7 rounded-full bg-[#fef2f2] border border-[#fecaca] text-[#ef4444] font-bold text-[11px] flex items-center justify-center shrink-0 shadow-sm">
                    3
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#000000] mb-0.5">Track Discrepancies</p>
                    <p className="text-[11px] text-[#627085] leading-relaxed">Instantly see what matches and what does not</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 relative z-10">
                  <div className="w-7 h-7 rounded-full bg-[#fef2f2] border border-[#fecaca] text-[#ef4444] font-bold text-[11px] flex items-center justify-center shrink-0 shadow-sm">
                    4
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#000000] mb-0.5">Generate Reports</p>
                    <p className="text-[11px] text-[#627085] leading-relaxed">Submit audits and view history anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Tyre Bottom Sheet for empty state */}
        <AnimatePresence>
          {isAddTyreOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsAddTyreOpen(false)}
                className="absolute inset-0 bg-[#000000]/40 backdrop-blur-sm z-40"
              />
              <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[2rem] z-50 flex flex-col max-h-[85%]"
              >
                <div className="flex justify-center pt-3 pb-2">
                  <div className="w-10 h-1 bg-[#d1d5db] rounded-full"></div>
                </div>
                
                <div className="flex items-center justify-between px-6 pb-3 border-b border-[#e5e7eb]">
                  <h3 className="text-[18px] font-bold text-[#111827]">Add Tyre</h3>
                  <button onClick={() => setIsAddTyreOpen(false)} className="w-8 h-8 flex items-center justify-center text-[#9ca3af] hover:text-[#111827] transition-colors">
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-5 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {/* Dropdowns */}
                  <div className="flex flex-col gap-3 mb-5">
                    <div className="relative">
                      <select className="w-full appearance-none bg-[#f3f4f6] hover:bg-[#e5e7eb]/80 border-0 rounded-2xl px-5 py-4 text-[14px] font-extrabold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 transition-all">
                        <option value="" disabled selected>Select Brand</option>
                        <option value="MRF">MRF</option>
                        <option value="CEAT">CEAT</option>
                        <option value="Apollo">Apollo</option>
                        <option value="Michelin">Michelin</option>
                        <option value="Bridgestone">Bridgestone</option>
                        <option value="JK Tyre">JK Tyre</option>
                      </select>
                      <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111827] rotate-90 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <select className="w-full appearance-none bg-[#f3f4f6] hover:bg-[#e5e7eb]/80 border-0 rounded-2xl px-5 py-4 text-[14px] font-extrabold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 transition-all">
                        <option value="" disabled selected>Select Size</option>
                        <option value="155/80/R13">155/80/R13</option>
                        <option value="165/70/R14">165/70/R14</option>
                        <option value="165/80/R14">165/80/R14</option>
                        <option value="185/65/R15">185/65/R15</option>
                        <option value="205/55/R16">205/55/R16</option>
                      </select>
                      <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111827] rotate-90 pointer-events-none" />
                    </div>
                  </div>

                  {/* Upload Image */}
                  <label className="w-full block cursor-pointer">
                    <div className="border border-[#e5e7eb] bg-[#f8f9fa] hover:bg-[#f3f4f6]/50 hover:border-[#ef4444]/30 rounded-2xl p-6 flex flex-col items-center justify-center gap-2.5 transition-all group">
                      <div className="w-12 h-12 rounded-full bg-[#fef2f2] text-[#ef4444] flex items-center justify-center transition-colors group-hover:bg-[#ef4444] group-hover:text-white">
                        <Camera className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <div className="text-center">
                        <p className="text-[13px] font-extrabold text-[#111827] mb-0.5">Upload Tyre Image</p>
                        <p className="text-[11px] text-[#627085] font-semibold">Tap to upload photo or invoice</p>
                      </div>
                    </div>
                    <input type="file" accept="image/*" className="hidden" />
                  </label>
                </div>

                {/* Save Button */}
                <div className="px-6 pb-6 pt-2">
                  <button 
                    onClick={() => setIsAddTyreOpen(false)}
                    className="w-full py-4 bg-[#ef4444] text-white rounded-xl font-bold text-[15px] shadow-[0_4px_12px_rgba(239,68,68,0.25)] active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4 stroke-[2.5]" />
                    Save to Inventory
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Selection screen
  if (mode === 'select') {
    return (
      <div className="flex flex-col h-full relative rounded-[2.5rem] overflow-hidden bg-[#f8f9fa]">
        <div className="flex items-center justify-between px-6 py-5 bg-white z-10 border-b border-[#e5e7eb] shrink-0">
          <button onClick={onBack} aria-label="Go back" className="text-[#000000] hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          <h1 className="text-[18px] font-bold text-[#000000] tracking-tight">Stock Take</h1>
          <div className="flex items-center bg-[#f3f4f6] p-0.5 rounded-lg border border-[#e5e7eb] shrink-0">
            <button className="px-2 py-1 text-[9px] font-bold bg-[#ef4444] text-white rounded shadow-sm">Data</button>
            <button onClick={() => { setSimulateEmpty(true); setInventory([]); }} className="px-2 py-1 text-[9px] font-bold text-[#627085] hover:text-[#000000] rounded transition-colors">Empty</button>
          </div>
        </div>
        <div className="flex-1 px-5 pt-5 pb-8 overflow-y-auto custom-scrollbar">
          {/* Session Date */}
          <div className="mb-6 mt-1">
            <h2 className="text-[22px] font-extrabold text-[#000000] tracking-tight">Monday, Mar 23</h2>
          </div>

          {/* Premium Selection Cards */}
          <div className="grid grid-cols-2 gap-3.5 mb-6">
            <button 
              onClick={() => setMode('brands')}
              className="flex flex-col items-start p-4 bg-white border border-[#e5e7eb] rounded-2xl text-left active:scale-[0.98] transition-all hover:shadow-md hover:border-[#ef4444]/30 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#fef2f2] flex items-center justify-center mb-3 text-[#ef4444] transition-colors group-hover:bg-[#ef4444] group-hover:text-white">
                <Shapes className="w-5 h-5 stroke-[2]" />
              </div>
              <p className="text-[15px] font-bold text-[#000000] mb-1">By Brands</p>
              <p className="text-[11px] text-[#627085] font-semibold leading-tight flex-1">Audit grouped by MRF, CEAT, Apollo...</p>
              <span className="text-[12px] font-bold text-[#ef4444] mt-3.5 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Select <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button 
              onClick={() => setMode('vehicle')}
              className="flex flex-col items-start p-4 bg-white border border-[#e5e7eb] rounded-2xl text-left active:scale-[0.98] transition-all hover:shadow-md hover:border-[#ef4444]/30 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#fef2f2] flex items-center justify-center mb-3 text-[#ef4444] transition-colors group-hover:bg-[#ef4444] group-hover:text-white">
                <Car className="w-5 h-5 stroke-[2]" />
              </div>
              <p className="text-[15px] font-bold text-[#000000] mb-1">By Vehicle</p>
              <p className="text-[11px] text-[#627085] font-semibold leading-tight flex-1">Audit grouped by Two/Four Wheelers...</p>
              <span className="text-[12px] font-bold text-[#ef4444] mt-3.5 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Select <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Old Tyres Card */}
          <div className="mb-6">
            <button 
              onClick={() => setMode('oldTyres')}
              className="w-full flex items-center gap-4 p-4 bg-white border border-[#e5e7eb] rounded-2xl text-left active:scale-[0.98] transition-all hover:shadow-md hover:border-[#ef4444]/30 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#fef2f2] flex items-center justify-center text-[#ef4444] transition-colors group-hover:bg-[#ef4444] group-hover:text-white shrink-0">
                <Aperture className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="flex-1">
                <p className="text-[15px] font-bold text-[#000000] mb-0.5">By Old Tyres</p>
                <p className="text-[11px] text-[#627085] font-semibold leading-tight">Count old/used tyre stock</p>
              </div>
              <span className="text-[12px] font-bold text-[#ef4444] flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0">
                Select <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Benefits / Steps */}
          <div className="bg-white border border-[#e5e7eb] rounded-[1.5rem] p-5 shadow-sm">
            <h3 className="text-[14px] font-bold text-[#000000] mb-4 flex items-center gap-2">
              <ClipboardCheck className="w-4.5 h-4.5 text-[#ef4444]" />
              How Stock Take works
            </h3>
            
            <div className="relative pl-1">
              {/* Timeline Connector Line */}
              <div className="absolute left-[13px] top-6 bottom-6 w-0.5 bg-[#fef2f2]"></div>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5 relative z-10">
                  <div className="w-7 h-7 rounded-full bg-[#fef2f2] border border-[#fecaca] text-[#ef4444] font-bold text-[11px] flex items-center justify-center shrink-0 shadow-sm">
                    1
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#000000] mb-0.5">Maintain Physical Quantity</p>
                    <p className="text-[11px] text-[#627085] leading-relaxed">Count your actual stock to keep records accurate</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 relative z-10">
                  <div className="w-7 h-7 rounded-full bg-[#fef2f2] border border-[#fecaca] text-[#ef4444] font-bold text-[11px] flex items-center justify-center shrink-0 shadow-sm">
                    2
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#000000] mb-0.5">Audit by Brand or Vehicle</p>
                    <p className="text-[11px] text-[#627085] leading-relaxed">Choose how you want to organize your count</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 relative z-10">
                  <div className="w-7 h-7 rounded-full bg-[#fef2f2] border border-[#fecaca] text-[#ef4444] font-bold text-[11px] flex items-center justify-center shrink-0 shadow-sm">
                    3
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#000000] mb-0.5">Track Discrepancies</p>
                    <p className="text-[11px] text-[#627085] leading-relaxed">Instantly see what matches and what does not</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 relative z-10">
                  <div className="w-7 h-7 rounded-full bg-[#fef2f2] border border-[#fecaca] text-[#ef4444] font-bold text-[11px] flex items-center justify-center shrink-0 shadow-sm">
                    4
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#000000] mb-0.5">Generate Reports</p>
                    <p className="text-[11px] text-[#627085] leading-relaxed">Submit audits and view history anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Old Tyres screen
  if (mode === 'oldTyres') {
    return (
      <div className="flex flex-col h-full relative rounded-[2.5rem] overflow-hidden bg-[#f8f9fa]">
        <div className="flex items-center justify-between px-6 py-5 bg-white z-10 border-b border-[#e5e7eb] shrink-0">
          <button onClick={() => setMode('select')} aria-label="Go back" className="text-[#000000] hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          <h1 className="text-[18px] font-bold text-[#000000] tracking-tight">Old Tyres</h1>
          <div className="w-6 h-6"></div>
        </div>

        <div className="flex-1 px-5 pt-6">
          <p className="text-[11px] font-bold text-[#9ca3af] uppercase tracking-wider mb-4">Enter old tyre count</p>
          
          <div className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-[#e5e7eb]">
              <p className="text-[14px] font-bold text-[#111827]">Car</p>
              <input 
                type="number" 
                value={oldCarCount}
                onChange={(e) => setOldCarCount(e.target.value)}
                className="w-[64px] h-[36px] text-center border border-[#d1d5db] rounded-lg text-[14px] font-bold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 focus:border-[#ef4444]/30 transition-all"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <p className="text-[14px] font-bold text-[#111827]">Bike</p>
              <input 
                type="number" 
                value={oldBikeCount}
                onChange={(e) => setOldBikeCount(e.target.value)}
                className="w-[64px] h-[36px] text-center border border-[#d1d5db] rounded-lg text-[14px] font-bold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 focus:border-[#ef4444]/30 transition-all"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              />
            </div>
          </div>
        </div>

        <div className="p-5 bg-white border-t border-[#e5e7eb]">
          <button 
            onClick={() => {
              const carQty = parseInt(oldCarCount) || 0;
              const bikeQty = parseInt(oldBikeCount) || 0;
              
              const newId = `AUD-${1041 + historyData.length}`;
              const newEntry = {
                id: newId,
                month: 'Mar',
                day: '23',
                time: '10:30 AM',
                group: 'today',
                label: 'Old Tyres Audit',
                items: 2,
                matched: 2,
                discrepancies: 0,
                status: 'approved',
                manager: 'Dravid S.',
                duration: '2 min',
                location: 'Main Warehouse',
                oldTyresCount: { car: carQty, bike: bikeQty }
              };
              setHistoryData(prev => [newEntry, ...prev]);
              
              setOldCarCount('0');
              setOldBikeCount('0');
              setMode('select');
              onFinish();
            }}
            className="w-full py-4 bg-[#ef4444] text-white rounded-xl font-bold text-[15px] shadow-[0_4px_12px_rgba(239,68,68,0.25)] active:scale-[0.98] transition-transform"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  // Main counting screen
  const groupKey = mode === 'brands' ? 'brand' : 'category';
  const groups = mode === 'brands' ? brands : categories;

  return (
    <div className="flex flex-col h-full relative rounded-[2.5rem] overflow-hidden bg-[#f8f9fa]">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 bg-white z-10 border-b border-[#e5e7eb] shrink-0">
        <button onClick={onBack} aria-label="Go back" className="text-[#000000] hover:bg-slate-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
        </button>
        <h1 className="text-[18px] font-bold text-[#000000] tracking-tight">Stock Take</h1>
        <div className="w-6 h-6"></div>
      </div>

      {/* Date + Toggle + Search */}
      <div className="px-5 pt-4 pb-3 bg-white border-b border-[#e5e7eb] flex flex-col gap-3 shrink-0">
        {/* Date */}
        <p className="text-[18px] font-bold text-[#000000]">Monday, Mar 23</p>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#627085]" />
          <input 
            type="text" 
            placeholder="Search brand, model, size..." 
            spellCheck={false} 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#f3f4f6] border border-[#e5e7eb] rounded-xl text-[13px] font-medium text-[#000000] placeholder:text-[#627085] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 focus:border-[#ef4444]/30 transition-all"
          />
        </div>
      </div>

      {/* Expandable Brand/Category List */}
      <div className="flex-1 overflow-y-auto px-5 pt-4 pb-28 custom-scrollbar">
        {groups.map(group => {
          const groupItems = inventory.filter(i => i[groupKey] === group);
          const filteredGroupItems = getFilteredItems(groupItems);
          const groupTotal = groupItems.reduce((sum, i) => sum + i.expected, 0);
          const isExpanded = expandedBrand === group;

          if (filteredGroupItems.length === 0 && !isExpanded) return null;

          return (
            <div key={group} className={`mb-3 border rounded-xl overflow-hidden ${
              confirmedBrands.includes(group as string) ? 'bg-[#f0fdf4] border-[#bbf7d0]' : 'bg-white border-[#e5e7eb]'
            }`}>
              {/* Group Header */}
              <button 
                onClick={() => setExpandedBrand(isExpanded ? null : group)}
                className="w-full flex items-center justify-between p-4 active:bg-[#f8f9fa] transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-bold text-[#000000]">{group}</span>
                    <span className="text-[12px] font-medium text-[#627085]">{groupItems.length} items</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3 text-[#f59e0b] stroke-[2.5]" />
                    <span className="text-[10px] font-medium text-[#627085]">Last audited: {
                      group === 'MRF' ? '2 days ago' : 
                      group === 'CEAT' ? 'Yesterday' : 
                      group === 'Apollo' ? '3 days ago' : 
                      group === 'Michelin' ? '5 days ago' : 
                      group === 'Bridgestone' ? 'Yesterday' : 
                      group === 'JK Tyre' ? '4 days ago' : 
                      'Yesterday'
                    }</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-bold text-[#627085]">Qty: {
                    groupItems.reduce((sum, i) => {
                      const temp = tempCounts[i.id];
                      if (temp !== undefined) return sum + (temp === '' ? 0 : parseInt(temp) || 0);
                      return sum + (i.counted ?? 0);
                    }, 0)
                  }</span>
                  <ChevronRight className={`w-4 h-4 text-[#627085] transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </div>
              </button>

              {/* Expanded Items - inside same card */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-[#e5e7eb] px-4 py-3 flex flex-col gap-2.5">
                      {filteredGroupItems.map(item => {
                        return (
                          <div 
                            key={item.id} 
                            className="flex items-center justify-between py-2"
                          >
                            <div>
                              <p className="text-[14px] font-bold text-[#000000]">
                                {mode === 'vehicle' && <span>{item.brand} </span>}{item.model} {item.size}
                              </p>
                              <p className="text-[10px] text-[#9ca3af] font-medium mt-0.5">Last audited: {
                                item.id === 1 ? '2 days ago' :
                                item.id === 2 ? '3 days ago' :
                                item.id === 3 ? 'Yesterday' :
                                item.id === 4 ? '4 days ago' :
                                item.id === 5 ? 'Yesterday' :
                                item.id === 6 ? '5 days ago' :
                                item.id === 7 ? '3 days ago' :
                                item.id === 8 ? '2 days ago' :
                                item.id === 9 ? 'Yesterday' :
                                '4 days ago'
                              }</p>
                            </div>
                            <input 
                              type="number"
                              value={tempCounts[item.id] ?? (item.counted !== null ? String(item.counted) : '')}
                              placeholder="0"
                              onClick={(e) => e.stopPropagation()}
                              onChange={(e) => handleCountChange(item.id, e.target.value)}
                              className="w-[64px] h-[36px] text-center border border-[#d1d5db] rounded-lg text-[14px] font-bold bg-white text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 focus:border-[#ef4444]/30 transition-all"
                              style={{ fontVariantNumeric: 'tabular-nums' }}
                            />
                          </div>
                        );
                      })}
                      {/* Manual Add + Confirm Count */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowManualAdd(group as string);
                        }}
                        className="w-full mt-2 py-3 bg-[#f3f4f6] text-[#627085] rounded-xl font-bold text-[13px] active:scale-[0.98] transition-transform flex items-center justify-center gap-1.5"
                      >
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                        Add New Size
                      </button>
                      {filteredGroupItems.some(item => tempCounts[item.id] !== undefined && tempCounts[item.id] !== '') && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleConfirmBrand(group as string);
                          }}
                          className="w-full mt-2 py-3 bg-[#16a34a] text-white rounded-xl font-bold text-[13px] active:scale-[0.98] transition-transform"
                        >
                          Confirm Count
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* Dashed Add Brand/Tyre Card */}
        <button
          onClick={() => setIsAddTyreOpen(true)}
          className="w-full mt-2 mb-6 p-5 border-2 border-dashed border-[#e5e7eb] hover:border-[#ef4444]/40 hover:bg-[#fef2f2]/30 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-200 group active:scale-[0.99]"
        >
          <div className="w-10 h-10 rounded-full bg-[#fef2f2] text-[#ef4444] flex items-center justify-center mb-2 group-hover:bg-[#ef4444] group-hover:text-white transition-colors">
            <Plus className="w-5 h-5 stroke-[2.5]" />
          </div>
          <p className="text-[14px] font-bold text-[#000000] mb-0.5">Add Tyres</p>
          <p className="text-[12px] text-[#627085] font-medium">Can't find a brand or size? Register it here.</p>
        </button>
      </div>

      {/* Bottom Bar - Finish Audit only */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-[#e5e7eb] z-20">
        <button 
          onClick={() => setIsSummaryOpen(true)}
          className="w-full py-3.5 bg-[#ef4444] hover:bg-[#dc2626] text-white rounded-xl font-bold text-[14px] shadow-[0_4px_12px_rgba(239,68,68,0.25)] active:scale-[0.98] transition-transform"
        >
          Finish Audit
        </button>
      </div>

      {/* Manual Add Bottom Sheet */}
      <AnimatePresence>
        {showManualAdd && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowManualAdd(null)}
              className="absolute inset-0 bg-[#000000]/40 backdrop-blur-sm z-40"
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[2rem] z-50 flex flex-col max-h-[85%]"
             >
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 bg-[#d1d5db] rounded-full"></div>
              </div>
              
              <div className="flex flex-col px-6 pb-3 border-b border-[#e5e7eb]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[18px] font-bold text-[#111827]">Add New Size</h3>
                  <button onClick={() => setShowManualAdd(null)} className="w-8 h-8 flex items-center justify-center text-[#9ca3af] hover:text-[#111827] transition-colors">
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>
                {mode === 'brands' ? (
                  <p className="text-[13px] text-[#627085] font-semibold mt-1">
                    Brand: <span className="text-[#111827] font-extrabold">{showManualAdd}</span>
                  </p>
                ) : (
                  <p className="text-[13px] text-[#627085] font-semibold mt-1">
                    Vehicle: <span className="text-[#111827] font-extrabold">{showManualAdd}</span>
                  </p>
                )}
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-5">
                {/* Dropdowns */}
                <div className="flex flex-col gap-3 mb-5">
                  {mode === 'brands' ? (
                    <>
                      {/* Size Select */}
                      <div className="relative">
                        <select id="manual-size" className="w-full appearance-none bg-white border border-[#e5e7eb] rounded-xl px-4 py-3.5 text-[14px] font-bold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 focus:border-[#ef4444]/30 transition-all">
                          <option value="" disabled selected>Select Size</option>
                          <option value="145/80/R12">145/80/R12</option>
                          <option value="155/80/R13">155/80/R13</option>
                          <option value="165/70/R14">165/70/R14</option>
                          <option value="165/80/R14">165/80/R14</option>
                          <option value="175/80/R14">175/80/R14</option>
                          <option value="185/65/R15">185/65/R15</option>
                          <option value="195/55/R16">195/55/R16</option>
                          <option value="205/55/R16">205/55/R16</option>
                        </select>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#627085] pointer-events-none" />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Brand Select */}
                      <div className="relative">
                        <select id="manual-brand" className="w-full appearance-none bg-white border border-[#e5e7eb] rounded-xl px-4 py-3.5 text-[14px] font-bold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 focus:border-[#ef4444]/30 transition-all">
                          <option value="" disabled selected>Select Brand</option>
                          <option value="MRF">MRF</option>
                          <option value="CEAT">CEAT</option>
                          <option value="Apollo">Apollo</option>
                          <option value="Michelin">Michelin</option>
                          <option value="Bridgestone">Bridgestone</option>
                          <option value="JK Tyre">JK Tyre</option>
                        </select>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#627085] pointer-events-none" />
                      </div>

                      {/* Size Select */}
                      <div className="relative">
                        <select id="manual-size" className="w-full appearance-none bg-white border border-[#e5e7eb] rounded-xl px-4 py-3.5 text-[14px] font-bold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 focus:border-[#ef4444]/30 transition-all">
                          <option value="" disabled selected>Select Size</option>
                          <option value="145/80/R12">145/80/R12</option>
                          <option value="155/80/R13">155/80/R13</option>
                          <option value="165/70/R14">165/70/R14</option>
                          <option value="165/80/R14">165/80/R14</option>
                          <option value="175/80/R14">175/80/R14</option>
                          <option value="185/65/R15">185/65/R15</option>
                          <option value="195/55/R16">195/55/R16</option>
                          <option value="205/55/R16">205/55/R16</option>
                        </select>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#627085] pointer-events-none" />
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Save Button */}
              <div className="px-6 pb-6 pt-2 border-t border-[#e5e7eb]/10">
                <button 
                  onClick={() => {
                    let brand = '';
                    let model = '';
                    let size = '';
                    let category = '';

                    if (mode === 'brands') {
                      const sizeEl = document.getElementById('manual-size') as HTMLSelectElement;
                      brand = showManualAdd || '';
                      model = '';
                      size = sizeEl?.value || '';
                      category = 'Four Wheeler';
                    } else {
                      const brandEl = document.getElementById('manual-brand') as HTMLSelectElement;
                      const sizeEl = document.getElementById('manual-size') as HTMLSelectElement;
                      brand = brandEl?.value || '';
                      model = '';
                      size = sizeEl?.value || '';
                      category = showManualAdd || 'Four Wheeler';
                    }

                    if (brand && size) {
                      setInventory(prev => [...prev, {
                        id: Date.now(),
                        brand: brand,
                        model: model,
                        size: size,
                        expected: 0,
                        counted: null,
                        category: category
                      }]);
                      setShowManualAdd(null);
                    }
                  }}
                  className="w-full py-4 bg-[#ef4444] text-white rounded-[14px] font-bold text-[15px] shadow-[0_4px_12px_rgba(239,68,68,0.25)] active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
                >
                  Add
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Summary Screen */}
      <AnimatePresence>
        {isSummaryOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute inset-0 z-50 flex flex-col bg-[#f8f9fa]"
          >
            <div className="flex items-center justify-between px-6 py-5 bg-white z-10 border-b border-[#e5e7eb] shrink-0">
              <button onClick={() => setIsSummaryOpen(false)} aria-label="Go back" className="text-[#000000] hover:bg-slate-100 rounded-full transition-colors">
                <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
              </button>
              <h1 className="text-[18px] font-bold text-[#000000]">Audit Summary</h1>
              <div className="w-6 h-6"></div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 pb-28 custom-scrollbar">
              {/* Stats Card */}
              <div className="bg-white border border-[#e5e7eb] rounded-2xl p-5 mb-4 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[15px] font-bold text-[#000000]">Dravid Singh</p>
                    <p className="text-[12px] font-medium text-[#627085]">Store Manager</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[13px] font-bold text-[#000000]">Today</p>
                    <p className="text-[12px] font-medium text-[#627085]">10:30 AM</p>
                  </div>
                </div>
                <div className="border-t border-[#f3f4f6] pt-4 flex items-center">
                  <div className="flex-1 text-center">
                    <p className="text-[24px] font-bold text-[#000000] leading-none mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {mode === 'brands' 
                        ? [...new Set(inventory.filter(i => getStatus(i) !== 'pending').map(i => i.brand))].length
                        : [...new Set(inventory.filter(i => getStatus(i) !== 'pending').map(i => i.category))].length
                      }
                    </p>
                    <p className="text-[10px] font-bold text-[#627085] uppercase tracking-wider">
                      {mode === 'brands' ? 'Brands' : 'Vehicles'}
                    </p>
                  </div>
                  <div className="w-[1px] h-10 bg-[#e5e7eb]"></div>
                  <div className="flex-1 text-center">
                    <p className="text-[24px] font-bold text-[#000000] leading-none mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {[...new Set(inventory.filter(i => getStatus(i) !== 'pending').map(i => i.size))].length}
                    </p>
                    <p className="text-[10px] font-bold text-[#627085] uppercase tracking-wider">SKU</p>
                  </div>
                  <div className="w-[1px] h-10 bg-[#e5e7eb]"></div>
                  <div className="flex-1 text-center">
                    <p className="text-[24px] font-bold text-[#000000] leading-none mb-1" style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {inventory.filter(i => getStatus(i) !== 'pending').reduce((sum, i) => sum + (i.counted || 0), 0)}
                    </p>
                    <p className="text-[10px] font-bold text-[#627085] uppercase tracking-wider">Total Qty</p>
                  </div>
                </div>
              </div>

              {/* Not counted warning */}
              {pendingItems > 0 && (
                <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl p-4 mb-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#ef4444] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[13px] font-bold text-[#000000] mb-0.5">{pendingItems} items not counted</p>
                    <p className="text-[12px] text-[#627085]">
                      {mode === 'brands'
                        ? brands
                            .filter(b => inventory.filter(i => i.brand === b && getStatus(i) === 'pending').length > 0)
                            .map(b => {
                              const hasCounted = inventory.filter(i => i.brand === b && getStatus(i) !== 'pending').length > 0;
                              return hasCounted ? `some variants of ${b}` : b;
                            })
                            .join(', ')
                        : categories
                            .filter(c => inventory.filter(i => i.category === c && getStatus(i) === 'pending').length > 0)
                            .map(c => {
                              const hasCounted = inventory.filter(i => i.category === c && getStatus(i) !== 'pending').length > 0;
                              return hasCounted ? `some variants of ${c}` : c;
                            })
                            .join(', ')
                      } not counted yet.
                    </p>
                  </div>
                </div>
              )}

              {/* Items Counted */}
              <h3 className="text-[15px] font-bold text-[#000000] mb-3 px-1">Items Counted</h3>
              <div className="space-y-4">
                {(Object.entries(
                  inventory.filter(i => getStatus(i) !== 'pending').reduce((acc, item) => {
                    const key = mode === 'brands' ? item.brand : item.category;
                    if (!acc[key]) acc[key] = [];
                    acc[key].push(item);
                    return acc;
                  }, {} as Record<string, typeof inventory>)
                ) as [string, typeof inventory][]).map(([groupName, items]) => (
                  <div key={groupName} className="mb-2">
                    <h4 className="text-[12px] font-bold text-[#627085] uppercase tracking-wider mb-2 px-1">{groupName}</h4>
                    <div className="space-y-2.5">
                      {items.map(item => (
                        <div key={item.id} className="bg-white border border-[#e5e7eb] rounded-xl p-4 flex justify-between items-center shadow-sm">
                          <div>
                            <p className="text-[14px] font-bold text-[#000000]">
                              {mode === 'vehicle' ? `${item.brand} ${item.model}` : item.model || 'Tyre'}
                            </p>
                            <p className="text-[12px] font-medium text-[#627085]">{item.size}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[14px] font-bold text-[#000000]" style={{ fontVariantNumeric: 'tabular-nums' }}>{item.counted}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                {inventory.filter(i => getStatus(i) !== 'pending').length === 0 && (
                  <div className="text-center py-10 border border-dashed border-[#e5e7eb] rounded-xl bg-white">
                    <p className="text-[#627085] text-[13px] font-medium">No items counted yet.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Submit */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-white border-t border-[#e5e7eb] z-10">
              <button 
                onClick={() => setShowSuccess(true)}
                className="w-full py-4 bg-[#ef4444] text-white rounded-xl font-bold text-[15px] shadow-[0_4px_12px_rgba(239,68,68,0.25)] active:scale-[0.98] transition-transform"
              >
                Submit
              </button>
            </div>

            {/* Success Popup */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#000000]/50 backdrop-blur-sm z-[60] flex items-center justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white rounded-3xl p-8 mx-8 text-center shadow-xl"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-[#16a34a] stroke-[2]" />
                    </div>
                    <h3 className="text-[20px] font-bold text-[#000000] mb-1">Audit Submitted</h3>
                    <p className="text-[14px] text-[#627085] mb-6">Your stock take has been saved successfully.</p>
                    <button 
                      onClick={() => {
                        const totalAudited = inventory.filter(i => getStatus(i) !== 'pending');
                        const matched = totalAudited.filter(i => getStatus(i) === 'matched').length;
                        const discrepancies = totalAudited.filter(i => getStatus(i) === 'discrepancy').length;
                        
                        const newId = `AUD-${1041 + historyData.length}`;
                        const newEntry = {
                          id: newId,
                          month: 'Mar',
                          day: '23',
                          time: '10:30 AM',
                          group: 'today',
                          label: mode === 'brands' ? 'Brand Count' : 'Vehicle Count',
                          items: totalAudited.length,
                          matched: matched,
                          discrepancies: discrepancies,
                          status: discrepancies > 0 ? 'review' : 'approved',
                          manager: 'Dravid S.',
                          duration: '45 min',
                          location: 'Main Warehouse'
                        };
                        setHistoryData(prev => [newEntry, ...prev]);
                        
                        setShowSuccess(false); 
                        setIsSummaryOpen(false); 
                        onFinish(); 
                      }}
                      className="w-full py-3.5 bg-[#000000] text-white rounded-xl font-bold text-[14px] active:scale-[0.98] transition-transform"
                    >
                      Done
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

        {/* Add Tyre Bottom Sheet */}
        <AnimatePresence>
          {isAddTyreOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsAddTyreOpen(false)}
                className="absolute inset-0 bg-[#000000]/40 backdrop-blur-sm z-40"
              />
              <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[2rem] z-50 flex flex-col max-h-[85%]"
              >
                <div className="flex justify-center pt-3 pb-2">
                  <div className="w-10 h-1 bg-[#d1d5db] rounded-full"></div>
                </div>
                <div className="flex items-center justify-between px-6 pb-3 border-b border-[#e5e7eb]">
                  <h3 className="text-[18px] font-bold text-[#111827]">Add Tyre</h3>
                  <button onClick={() => setIsAddTyreOpen(false)} className="w-8 h-8 flex items-center justify-center text-[#9ca3af] hover:text-[#111827] transition-colors">
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-5 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {/* Dropdowns */}
                  <div className="flex flex-col gap-3 mb-5">
                    {mode === 'vehicle' ? (
                      <>
                        <div className="relative">
                          <select id="sheet-category" className="w-full appearance-none bg-[#f3f4f6] hover:bg-[#e5e7eb]/80 border-0 rounded-2xl px-5 py-4 text-[14px] font-extrabold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 transition-all">
                            <option value="" disabled selected>Select Vehicle Type</option>
                            <option value="Four Wheeler">Four Wheeler</option>
                            <option value="Two Wheeler">Two Wheeler</option>
                          </select>
                          <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111827] rotate-90 pointer-events-none" />
                        </div>
                        <div className="relative">
                          <select id="sheet-brand" className="w-full appearance-none bg-[#f3f4f6] hover:bg-[#e5e7eb]/80 border-0 rounded-2xl px-5 py-4 text-[14px] font-extrabold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 transition-all">
                            <option value="" disabled selected>Select Brand</option>
                            <option value="MRF">MRF</option>
                            <option value="CEAT">CEAT</option>
                            <option value="Apollo">Apollo</option>
                            <option value="Michelin">Michelin</option>
                            <option value="Bridgestone">Bridgestone</option>
                            <option value="JK Tyre">JK Tyre</option>
                          </select>
                          <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111827] rotate-90 pointer-events-none" />
                        </div>
                        <div className="relative">
                          <select id="sheet-size" className="w-full appearance-none bg-[#f3f4f6] hover:bg-[#e5e7eb]/80 border-0 rounded-2xl px-5 py-4 text-[14px] font-extrabold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 transition-all">
                            <option value="" disabled selected>Select Size</option>
                            <option value="155/80/R13">155/80/R13</option>
                            <option value="165/70/R14">165/70/R14</option>
                            <option value="165/80/R14">165/80/R14</option>
                            <option value="185/65/R15">185/65/R15</option>
                            <option value="205/55/R16">205/55/R16</option>
                          </select>
                          <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111827] rotate-90 pointer-events-none" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative">
                          <select id="sheet-brand" className="w-full appearance-none bg-[#f3f4f6] hover:bg-[#e5e7eb]/80 border-0 rounded-2xl px-5 py-4 text-[14px] font-extrabold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 transition-all">
                            <option value="" disabled selected>Select Brand</option>
                            <option value="MRF">MRF</option>
                            <option value="CEAT">CEAT</option>
                            <option value="Apollo">Apollo</option>
                            <option value="Michelin">Michelin</option>
                            <option value="Bridgestone">Bridgestone</option>
                            <option value="JK Tyre">JK Tyre</option>
                          </select>
                          <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111827] rotate-90 pointer-events-none" />
                        </div>
                        <div className="relative">
                          <select id="sheet-size" className="w-full appearance-none bg-[#f3f4f6] hover:bg-[#e5e7eb]/80 border-0 rounded-2xl px-5 py-4 text-[14px] font-extrabold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 transition-all">
                            <option value="" disabled selected>Select Size</option>
                            <option value="155/80/R13">155/80/R13</option>
                            <option value="165/70/R14">165/70/R14</option>
                            <option value="165/80/R14">165/80/R14</option>
                            <option value="185/65/R15">185/65/R15</option>
                            <option value="205/55/R16">205/55/R16</option>
                          </select>
                          <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111827] rotate-90 pointer-events-none" />
                        </div>
                      </>
                    )}
                  </div>

                  {/* Stock & Pricing */}
                  <p className="text-[12px] font-extrabold text-[#627085] uppercase tracking-wider mb-3 mt-6 px-1">Stock & Pricing</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#f3f4f6] rounded-2xl p-4 flex flex-col justify-between h-[104px]">
                      <p className="text-[12px] font-extrabold text-[#6b7280]">Quantity</p>
                      <div className="flex items-center justify-between">
                        <button 
                          onClick={() => setSheetQty(q => Math.max(1, q - 1))}
                          className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#111827] active:scale-90 transition-transform shadow-sm border border-[#e5e7eb] hover:bg-slate-50"
                        >
                          <Minus className="w-3.5 h-3.5 stroke-[3]" />
                        </button>
                        <span className="text-[16px] font-extrabold text-[#111827]" style={{ fontVariantNumeric: 'tabular-nums' }}>{sheetQty}</span>
                        <button 
                          onClick={() => setSheetQty(q => q + 1)}
                          className="w-8 h-8 rounded-full bg-[#ef4444] flex items-center justify-center text-white active:scale-90 transition-transform shadow-sm hover:bg-[#dc2626]"
                        >
                          <Plus className="w-3.5 h-3.5 stroke-[3]" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-[#f3f4f6] rounded-2xl p-4 flex flex-col justify-between h-[104px]">
                      <p className="text-[12px] font-extrabold text-[#6b7280]">Unit Price</p>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#627085] font-bold text-[15px]">{'\u20B9'}</div>
                        <input type="number" placeholder="0.00" className="w-full bg-white border border-[#e5e7eb] rounded-xl pl-7 pr-3 py-2 text-[15px] font-bold text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 focus:border-[#ef4444]/30 transition-all" />
                      </div>
                    </div>
                  </div>

                  {/* Condition */}
                  <p className="text-[12px] font-extrabold text-[#627085] uppercase tracking-wider mb-3 mt-6 px-1">Condition</p>
                  <div className="flex gap-2">
                    {['New', 'Used', 'Retread'].map((cond) => {
                      const isActive = sheetCondition === cond;
                      return (
                        <button
                          key={cond}
                          type="button"
                          onClick={() => setSheetCondition(cond)}
                          className={`flex-1 py-3 rounded-xl font-bold text-[13px] transition-all active:scale-95 ${
                            isActive 
                              ? 'bg-[#111827] text-white' 
                              : 'bg-white text-[#627085] border border-[#e5e7eb]'
                          }`}
                        >
                          {cond}
                        </button>
                      );
                    })}
                  </div>

                  {/* Upload Image - at bottom */}
                  <label className="w-full block cursor-pointer mt-6">
                    <div className="border border-[#e5e7eb] bg-[#f8f9fa] hover:bg-[#f3f4f6]/50 hover:border-[#ef4444]/30 rounded-2xl p-6 flex flex-col items-center justify-center gap-2.5 transition-all group">
                      <div className="w-12 h-12 rounded-full bg-[#fef2f2] text-[#ef4444] flex items-center justify-center transition-colors group-hover:bg-[#ef4444] group-hover:text-white">
                        <Camera className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <div className="text-center">
                        <p className="text-[13px] font-extrabold text-[#111827] mb-0.5">Upload Tyre Image</p>
                        <p className="text-[11px] text-[#627085] font-semibold">Tap to upload photo or invoice</p>
                      </div>
                    </div>
                    <input type="file" accept="image/*" className="hidden" />
                  </label>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button 
                    onClick={() => {
                      const brandEl = document.getElementById('sheet-brand') as HTMLSelectElement;
                      const sizeEl = document.getElementById('sheet-size') as HTMLSelectElement;
                      const categoryEl = document.getElementById('sheet-category') as HTMLSelectElement;
                      const brand = brandEl?.value || '';
                      const size = sizeEl?.value || '';
                      const category = categoryEl?.value || 'Four Wheeler';
                      if (brand && size) {
                        setInventory(prev => [...prev, {
                          id: Date.now(),
                          brand,
                          model: '',
                          size,
                          expected: 0,
                          counted: null,
                          category
                        }]);
                        setIsAddTyreOpen(false);
                      }
                    }}
                    className="w-full py-4 bg-[#ef4444] text-white rounded-xl font-bold text-[15px] shadow-[0_4px_12px_rgba(239,68,68,0.25)] active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4 stroke-[2.5]" />
                    Save to Inventory
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
    </div>
  );
}

function AddTyreScreen({ onBack }: { onBack: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="flex flex-col h-full relative rounded-[2.5rem] overflow-hidden bg-[#f8f9fa]"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 bg-white z-10 border-b border-[#e5e7eb] shrink-0">
        <button 
          onClick={onBack}
          aria-label="Go back"
          className="text-[#000000] hover:bg-slate-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
        </button>
        <h1 className="text-[18px] font-bold text-[#000000]">Add Tyre</h1>
        <div className="w-6 h-6"></div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-5 py-6 pb-28 custom-scrollbar">
        
        {/* Upload Tyre Image */}
        <div className="mb-6">
          <label className="w-full block cursor-pointer">
            <div className="border-2 border-dashed border-[#e5e7eb] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 bg-white hover:border-[#ef4444]/40 hover:bg-[#fef2f2]/30 transition-all active:scale-[0.98]">
              <div className="w-14 h-14 rounded-2xl bg-[#fef2f2] flex items-center justify-center">
                <Camera className="w-6 h-6 text-[#ef4444] stroke-[2]" />
              </div>
              <div className="text-center">
                <p className="text-[15px] font-bold text-[#000000] mb-0.5">Upload Tyre Image</p>
                <p className="text-[12px] text-[#627085] font-medium">Tap to upload photo or invoice</p>
              </div>
            </div>
            <input type="file" accept="image/*" className="hidden" />
          </label>
        </div>

        {/* Bento Form - Core Details */}
        <div className="mb-6">
          <h2 className="text-[12px] font-bold text-[#627085] uppercase tracking-wider mb-3 px-1">Tyre Details</h2>
          <div className="flex flex-col gap-3">
            
            <div className="relative">
              <select className="w-full appearance-none bg-white border border-[#d1d5db] rounded-xl px-4 py-4 text-[15px] font-bold text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 focus:border-[#ef4444]/30 transition-all">
                <option value="" disabled selected>Select Brand</option>
                <option value="mrf">MRF</option>
                <option value="ceat">CEAT</option>
                <option value="apollo">Apollo</option>
                <option value="michelin">Michelin</option>
                <option value="bridgestone">Bridgestone</option>
                <option value="goodyear">Goodyear</option>
                <option value="jk">JK Tyre</option>
              </select>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#627085] rotate-90 pointer-events-none" />
            </div>

            <div className="relative">
              <select className="w-full appearance-none bg-white border border-[#d1d5db] rounded-xl px-4 py-4 text-[15px] font-bold text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 focus:border-[#ef4444]/30 transition-all">
                <option value="" disabled selected>Select Model</option>
                <option value="zlx">ZLX</option>
                <option value="milaze">Milaze X3</option>
                <option value="amazer">Amazer 4G</option>
                <option value="energy">Energy XM2</option>
                <option value="b290">B290</option>
              </select>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#627085] rotate-90 pointer-events-none" />
            </div>

            <div className="relative">
              <select className="w-full appearance-none bg-white border border-[#d1d5db] rounded-xl px-4 py-4 text-[15px] font-bold text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 focus:border-[#ef4444]/30 transition-all">
                <option value="" disabled selected>Select Size</option>
                <option value="155/80R13">155/80 R13</option>
                <option value="165/70R14">165/70 R14</option>
                <option value="175/65R14">175/65 R14</option>
                <option value="185/65R15">185/65 R15</option>
                <option value="195/55R16">195/55 R16</option>
                <option value="205/55R16">205/55 R16</option>
                <option value="205/60R16">205/60 R16</option>
              </select>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#627085] rotate-90 pointer-events-none" />
            </div>

          </div>
        </div>

        {/* Stock & Pricing */}
        <div className="mb-6">
          <h2 className="text-[12px] font-bold text-[#627085] uppercase tracking-wider mb-3 px-1">Stock & Pricing</h2>
          <div className="grid grid-cols-2 gap-3">
            
            <div className="bg-white border border-[#d1d5db] rounded-xl p-4">
              <p className="text-[12px] font-bold text-[#627085] mb-2">Quantity</p>
              <div className="flex items-center justify-between">
                <button className="w-9 h-9 rounded-lg bg-white border border-[#d1d5db] flex items-center justify-center text-[#000000] active:scale-90 transition-transform">
                  <Minus className="w-4 h-4 stroke-[3]" />
                </button>
                <span className="text-[16px] font-bold text-[#000000]" style={{ fontVariantNumeric: 'tabular-nums' }}>1</span>
                <button className="w-9 h-9 rounded-lg bg-[#000000] flex items-center justify-center text-white active:scale-90 transition-transform">
                  <Plus className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            </div>

            <div className="bg-white border border-[#d1d5db] rounded-xl p-4">
              <p className="text-[12px] font-bold text-[#627085] mb-2">Unit Price</p>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#627085] font-bold text-[15px]">
                  {'\u20B9'}
                </div>
                <input 
                  type="number" 
                  placeholder="0.00" 
                  className="w-full bg-[#f8f9fa] border border-[#e5e7eb] rounded-lg pl-7 pr-3 py-2 text-[15px] font-bold text-[#000000] placeholder:text-[#627085] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 focus:border-[#ef4444]/30 transition-all"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Condition */}
        <div className="mb-6">
          <h2 className="text-[12px] font-bold text-[#627085] uppercase tracking-wider mb-3 px-1">Condition</h2>
          <div className="flex gap-2">
            <button className="flex-1 py-3 bg-[#000000] text-white rounded-xl font-bold text-[13px] transition-transform active:scale-95">
              New
            </button>
            <button className="flex-1 py-3 bg-white text-[#627085] rounded-xl font-bold text-[13px] border border-[#e5e7eb] transition-transform active:scale-95">
              Used
            </button>
            <button className="flex-1 py-3 bg-white text-[#627085] rounded-xl font-bold text-[13px] border border-[#e5e7eb] transition-transform active:scale-95">
              Retread
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Fixed Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#e5e7eb] p-5 z-20">
        <button 
          onClick={onBack}
          className="w-full py-4 bg-[#ef4444] hover:bg-[#dc2626] text-white rounded-2xl font-bold text-[15px] transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(239,68,68,0.25)]"
        >
          <Save className="w-4 h-4 stroke-[2.5]" />
          Save to Inventory
        </button>
      </div>

    </motion.div>
  );
}


function FullItemListScreen({ audit, onBack, onReAudit }: { audit: any, onBack: () => void, onReAudit: () => void }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'matched' | 'discrepancy'>('all');

  const items = [
    { id: 'ITEM-1001', brand: 'MRF', model: '4G', size: '165/80/R14', expected: 50, found: 50, status: 'matched' as const },
    { id: 'ITEM-1002', brand: 'MRF', model: '4G', size: '175/80/R14', expected: 150, found: 150, status: 'matched' as const },
    { id: 'ITEM-1003', brand: 'MRF', model: 'ZLX', size: '155/80/R13', expected: 12, found: 12, status: 'matched' as const },
    { id: 'ITEM-1004', brand: 'CEAT', model: 'Milaze X3', size: '165/70/R14', expected: 8, found: 8, status: 'matched' as const },
    { id: 'ITEM-1005', brand: 'CEAT', model: 'SecuraDrive', size: '205/60/R16', expected: 9, found: 9, status: 'matched' as const },
    { id: 'ITEM-1006', brand: 'Apollo', model: 'Amazer 4G', size: '145/80/R12', expected: 15, found: 15, status: 'matched' as const },
    { id: 'ITEM-1007', brand: 'Apollo', model: 'Alnac 4GS', size: '205/55/R16', expected: 45, found: 43, status: 'discrepancy' as const },
    { id: 'ITEM-1008', brand: 'Michelin', model: 'Energy XM2', size: '185/65/R15', expected: 6, found: 4, status: 'discrepancy' as const },
    { id: 'ITEM-1009', brand: 'Bridgestone', model: 'B290', size: '195/55/R16', expected: 10, found: 10, status: 'matched' as const },
    { id: 'ITEM-1010', brand: 'JK Tyre', model: 'Blaze', size: '90/90/R12', expected: 20, found: 20, status: 'matched' as const },
  ];

  const filteredItems = items.filter(item =>
    (filter === 'all' || item.status === filter) &&
    (item.brand.toLowerCase().includes(search.toLowerCase()) ||
     item.size.toLowerCase().includes(search.toLowerCase()) ||
     item.model.toLowerCase().includes(search.toLowerCase()))
  );

  const discrepancyCount = items.filter(i => i.status === 'discrepancy').length;
  const matchedCount = items.filter(i => i.status === 'matched').length;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex flex-col h-full relative rounded-[2.5rem] overflow-hidden bg-[#f8f9fa]"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 bg-white border-b border-[#e5e7eb] z-10">
        <button onClick={onBack} aria-label="Go back" className="w-10 h-10 flex items-center justify-center text-[#000000] hover:bg-[#f3f4f6] rounded-xl transition-colors">
          <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
        </button>
        <h1 className="text-[17px] font-bold text-[#000000]">Items Audited</h1>
        <div className="w-10 h-10"></div>
      </div>

      {/* Date + Manager */}
      <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-[#e5e7eb]">
        <p className="text-[18px] font-bold text-[#000000]">{audit.month} {audit.day}, {audit.time}</p>
        <p className="text-[14px] font-medium text-[#627085]">{audit.manager}</p>
      </div>

      {/* Search + Filters */}
      <div className="px-5 pt-4 pb-3 bg-white border-b border-[#e5e7eb]">
        <div className="relative mb-3">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#627085]" />
          <input type="text" placeholder="Search by brand, model, or size..." spellCheck={false} value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-[#f3f4f6] border border-[#e5e7eb] rounded-2xl text-[14px] font-medium text-[#000000] placeholder:text-[#627085] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 focus:border-[#ef4444]/30 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-xl text-[12px] font-bold transition-all ${filter === 'all' ? 'bg-[#000000] text-white shadow-md' : 'bg-[#f3f4f6] text-[#627085]'}`}>All ({items.length})</button>
          <button onClick={() => setFilter('matched')} className={`px-4 py-2 rounded-xl text-[12px] font-bold transition-all ${filter === 'matched' ? 'bg-[#000000] text-white shadow-md' : 'bg-[#f3f4f6] text-[#627085]'}`}>Matched ({matchedCount})</button>
          <button onClick={() => setFilter('discrepancy')} className={`px-4 py-2 rounded-xl text-[12px] font-bold transition-all ${filter === 'discrepancy' ? 'bg-[#ef4444] text-white shadow-md shadow-[#ef4444]/20' : 'bg-[#f3f4f6] text-[#627085]'}`}>Unmatched ({discrepancyCount})</button>
        </div>
      </div>

      {/* Item List */}
      <div className="flex-1 overflow-y-auto px-5 pt-4 pb-8 custom-scrollbar">
        <div className="flex flex-col gap-2.5">
          {filteredItems.map(item => (
            <div key={item.id}
              className={`rounded-2xl p-4 flex items-center gap-3 border shadow-sm ${
                item.status === 'discrepancy' ? 'bg-white border-[#fecaca]' : 'bg-white border-[#e5e7eb]'
              }`}
              style={{ contentVisibility: 'auto', containIntrinsicSize: '0 72px' }}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                item.status === 'discrepancy' ? 'bg-[#fef2f2]' : 'bg-[#f3f4f6]'
              }`}>
                {item.status === 'discrepancy' ? (
                  <AlertCircle className="w-4 h-4 text-[#ef4444] stroke-[2]" />
                ) : (
                  <Check className="w-4 h-4 text-[#000000] stroke-[2.5]" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[14px] font-bold text-[#000000] truncate">{item.brand}</span>
                  <span className="text-[10px] font-semibold text-[#627085] bg-[#f3f4f6] px-2 py-0.5 rounded-md uppercase">{item.model}</span>
                </div>
                <span className="text-[12px] text-[#627085] font-medium">{item.size}</span>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[14px] text-[#627085] font-medium" style={{ fontVariantNumeric: 'tabular-nums' }}>{item.expected}</span>
                  <span className="text-[#d1d5db] text-[10px]">{'\u2192'}</span>
                  <span className={`text-[14px] font-bold ${item.status === 'discrepancy' ? 'text-[#ef4444]' : 'text-[#000000]'}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{item.found}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredItems.length === 0 && (
          <div className="text-center py-16"><p className="text-[#627085] text-[14px] font-medium">No items match your filter</p></div>
        )}
      </div>

      {/* Re-Audit Button */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-white border-t border-[#e5e7eb] z-20">
        <button 
          onClick={onReAudit}
          className="w-full py-4 bg-[#ef4444] text-white rounded-xl font-bold text-[15px] shadow-[0_4px_12px_rgba(239,68,68,0.25)] active:scale-[0.98] transition-transform"
        >
          New Audit
        </button>
      </div>
    </motion.div>
  );
}

function HistoryScreen({ onBack, onReAudit, historyData }: { onBack: () => void, onReAudit: () => void, historyData: any[] }) {
  const [selectedAudit, setSelectedAudit] = useState<any | null>(null);
  const [viewingFullList, setViewingFullList] = useState(false);

  const todayAudits = historyData.filter(a => a.group === 'today');
  const yesterdayAudits = historyData.filter(a => a.group === 'yesterday');
  const thisWeekAudits = historyData.filter(a => a.group === 'thisWeek');
  const lastWeekAudits = historyData.filter(a => a.group === 'lastWeek');
  const totalAudits = historyData.length;
  const totalVariances = historyData.reduce((sum, a) => sum + a.discrepancies, 0);
  const avgAccuracy = Math.round((historyData.reduce((sum, a) => sum + a.matched, 0) / historyData.reduce((sum, a) => sum + a.items, 0)) * 100 * 10) / 10;

  if (viewingFullList) { return <FullItemListScreen audit={selectedAudit} onBack={() => setViewingFullList(false)} onReAudit={onReAudit} />; }

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
      className="flex flex-col h-full relative rounded-[2.5rem] overflow-hidden bg-[#f8f9fa]"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 bg-white z-10 border-b border-[#e5e7eb]">
        <button onClick={onBack} aria-label="Go back" className="text-[#000000] hover:bg-slate-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
        </button>
        <h1 className="text-[18px] font-bold text-[#000000]">Audit History</h1>
        <div className="w-6 h-6"></div>
      </div>

      {/* Stats */}
      <div className="px-5 py-4 bg-white border-b border-[#e5e7eb]">
        <div className="flex gap-2">
          <div className="flex-1 bg-[#f3f4f6] rounded-xl p-3 text-center">
            <p className="text-[20px] font-bold text-[#000000] leading-none mb-0.5" style={{ fontVariantNumeric: 'tabular-nums' }}>{totalAudits}</p>
            <p className="text-[10px] text-[#627085] font-bold uppercase tracking-wider">Audits</p>
          </div>
          <div className="flex-1 bg-[#effff4] rounded-xl p-3 text-center">
            <p className="text-[20px] font-bold text-[#00b633] leading-none mb-0.5" style={{ fontVariantNumeric: 'tabular-nums' }}>{avgAccuracy}%</p>
            <p className="text-[10px] text-[#00b633]/65 font-bold uppercase tracking-wider">Accuracy</p>
          </div>
          <div className="flex-1 bg-[#f3f4f6] rounded-xl p-3 text-center">
            <p className="text-[20px] font-bold text-[#000000] leading-none mb-0.5" style={{ fontVariantNumeric: 'tabular-nums' }}>{totalVariances}</p>
            <p className="text-[10px] text-[#627085] font-bold uppercase tracking-wider">Unmatched</p>
          </div>
        </div>
      </div>

      {/* Timeline List */}
      <div className="flex-1 overflow-y-auto px-5 pt-5 pb-8 custom-scrollbar">
        <div className="flex flex-col gap-3">
          {historyData.map(audit => (<AuditCard key={audit.id} audit={audit} onSelect={() => setSelectedAudit(audit)} />))}
        </div>
      </div>

      {/* Audit Detail Bottom Sheet */}
      <AnimatePresence>
        {selectedAudit && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAudit(null)}
              className="absolute inset-0 bg-[#000000]/40 backdrop-blur-sm z-40"
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[2rem] z-50 flex flex-col max-h-[85%]"
            >
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 bg-[#d1d5db] rounded-full"></div>
              </div>
              
              <div className="px-6 pb-6 pt-2 overflow-y-auto custom-scrollbar">
                <div className="flex justify-between items-start mb-1">
                  <h2 className="text-[22px] font-bold text-[#000000] leading-tight">Audit {selectedAudit.id}</h2>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg uppercase ${
                    selectedAudit.status === 'review' ? 'bg-[#fef2f2] text-[#ef4444]' : 'bg-[#f3f4f6] text-[#000000]'
                  }`}>
                    {selectedAudit.status === 'review' ? 'Partial' : 'Completed'}
                  </span>
                </div>
                <p className="text-[13px] text-[#627085] font-medium mb-5">{selectedAudit.month} {selectedAudit.day}, {selectedAudit.time}</p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-[#f3f4f6] border border-[#e5e7eb] rounded-xl p-4">
                    <p className="text-[10px] font-bold text-[#627085] uppercase tracking-wider mb-1">Total Items</p>
                    <p className="text-[24px] font-bold text-[#000000] leading-none" style={{ fontVariantNumeric: 'tabular-nums' }}>{selectedAudit.items}</p>
                  </div>
                  <div className={`border rounded-xl p-4 ${selectedAudit.discrepancies > 0 ? 'bg-[#fef2f2] border-[#fecaca]' : 'bg-[#f3f4f6] border-[#e5e7eb]'}`}>
                    <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${selectedAudit.discrepancies > 0 ? 'text-[#ef4444]' : 'text-[#627085]'}`}>Variances</p>
                    <p className={`text-[24px] font-bold leading-none ${selectedAudit.discrepancies > 0 ? 'text-[#ef4444]' : 'text-[#000000]'}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{selectedAudit.discrepancies}</p>
                  </div>
                </div>

                <h3 className="text-[14px] font-bold text-[#000000] mb-3">Audit Details</h3>
                <div className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden mb-5">
                  <div className="flex justify-between items-center px-4 py-3 border-b border-[#f3f4f6]">
                    <span className="text-[13px] text-[#627085]">Manager</span>
                    <span className="text-[13px] font-bold text-[#000000]">{selectedAudit.manager}</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-3 border-b border-[#f3f4f6]">
                    <span className="text-[13px] text-[#627085]">Location</span>
                    <span className="text-[13px] font-bold text-[#000000]">{selectedAudit.location}</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-3">
                    <span className="text-[13px] text-[#627085]">Duration</span>
                    <span className="text-[13px] font-bold text-[#000000]">{selectedAudit.duration}</span>
                  </div>
                </div>

                {selectedAudit.label === 'Old Tyres Audit' ? (
                  <div className="mb-5">
                    <h3 className="text-[14px] font-bold text-[#000000] mb-3">Old Tyres Counted</h3>
                    <div className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden mb-5">
                      <div className="flex justify-between items-center px-4 py-3 border-b border-[#f3f4f6]">
                        <span className="text-[13px] text-[#627085]">Car Tyres</span>
                        <span className="text-[13px] font-bold text-[#000000]">{selectedAudit.oldTyresCount?.car ?? 0}</span>
                      </div>
                      <div className="flex justify-between items-center px-4 py-3">
                        <span className="text-[13px] text-[#627085]">Bike Tyres</span>
                        <span className="text-[13px] font-bold text-[#000000]">{selectedAudit.oldTyresCount?.bike ?? 0}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {selectedAudit.discrepancies > 0 && (
                      <div className="mb-5">
                        <h3 className="text-[14px] font-bold text-[#000000] mb-3">Variance Log</h3>
                        <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl p-4">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[14px] font-bold text-[#000000]">205/55 R16 Apollo</span>
                            <span className="text-[11px] font-bold text-[#ef4444] bg-white border border-[#fecaca] px-2 py-0.5 rounded-full">-2 Missing</span>
                          </div>
                          <p className="text-[12px] text-[#627085]">System expected 45, found 43 during physical count.</p>
                        </div>
                      </div>
                    )}

                    <button 
                      onClick={() => setViewingFullList(true)}
                      className="w-full py-3.5 bg-[#000000] text-white rounded-xl font-bold text-[14px] mb-3 active:scale-[0.98] transition-transform"
                    >
                      View All {selectedAudit.items} Items
                    </button>
                  </>
                )}
                <button 
                  onClick={() => setSelectedAudit(null)}
                  className="w-full py-3.5 bg-white text-[#000000] border border-[#e5e7eb] rounded-xl font-bold text-[14px] active:scale-[0.98] transition-transform"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function AuditCard({ audit, onSelect }: React.ComponentProps<'div'> & { audit: any; onSelect: () => void }) {
  const hasIssues = audit.discrepancies > 0;
  return (
    <button onClick={onSelect}
      className="w-full text-left bg-white rounded-2xl p-4 flex items-center gap-3.5 border border-[#e5e7eb] shadow-sm transition-all active:scale-[0.97] hover:shadow-md"
    >
      <div className={`w-[52px] h-[60px] min-w-[52px] rounded-2xl flex flex-col items-center justify-center ${
        hasIssues ? 'bg-gradient-to-b from-[#fef2f2] to-[#fee2e2] border border-[#fecaca]' : 'bg-[#f3f4f6] border border-[#e5e7eb]'
      }`}>
        <span className={`text-[9px] font-bold uppercase tracking-wider ${hasIssues ? 'text-[#ef4444]/60' : 'text-[#627085]'}`}>{audit.month}</span>
        <span className={`text-[20px] font-bold leading-none ${hasIssues ? 'text-[#ef4444]' : 'text-[#000000]'}`} style={{ fontVariantNumeric: 'tabular-nums' }}>{audit.day}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-[15px] font-bold text-[#000000] truncate mb-0.5">{audit.label}</h3>
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-[#627085] font-medium">{audit.time}</span>
          <span className="w-1 h-1 rounded-full bg-[#d1d5db]"></span>
          <span className="text-[12px] text-[#627085] font-medium">{audit.items} items</span>
        </div>
      </div>
      <div className="flex-shrink-0">
        {hasIssues ? (
          <div className="flex flex-col items-center justify-center w-[52px] h-[52px] bg-[#fef2f2] border border-[#fecaca] rounded-xl p-1">
            <span className="text-[16px] font-bold text-[#ef4444] leading-none mb-0.5" style={{ fontVariantNumeric: 'tabular-nums' }}>{audit.discrepancies}</span>
            <span className="text-[8px] font-bold text-[#ef4444] uppercase tracking-widest leading-none">Review</span>
          </div>
        ) : (
          <div className="flex items-center gap-1 px-2.5 py-1.5 bg-[#effff4] border border-[#bbf7d0] rounded-xl">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00b633] stroke-[2.5]" />
            <span className="text-[12px] font-bold text-[#00b633]">Clear</span>
          </div>
        )}
      </div>
    </button>
  );
}

function AuditDetailScreen({ audit, onBack, onViewItems }: { audit: any, onBack: () => void, onViewItems: () => void }) {
  const accuracy = Math.round((audit.matched / audit.items) * 100);
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full relative rounded-[2.5rem] overflow-hidden bg-[#f8f9fa]"
    >
      <div className="flex items-center justify-between px-6 py-5 bg-white z-10 border-b border-[#e5e7eb]">
        <button onClick={onBack} aria-label="Go back" className="text-[#000000] hover:bg-slate-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
        </button>
        <h1 className="text-[18px] font-bold text-[#000000]">{audit.label}</h1>
        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg uppercase ${
          audit.status === 'review' ? 'bg-[#fef2f2] text-[#ef4444]' : 'bg-[#f3f4f6] text-[#000000]'
        }`}>
          {audit.status === 'review' ? 'Review' : 'Done'}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-5 pb-28 custom-scrollbar">
        <div className="bg-white border border-[#e5e7eb] rounded-2xl p-5 mb-4 shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[20px] font-bold text-[#000000]" style={{ fontVariantNumeric: 'tabular-nums' }}>{audit.items}</p>
              <p className="text-[10px] text-[#627085] font-bold uppercase tracking-wider">Items</p>
            </div>
            <div>
              <p className="text-[20px] font-bold text-[#000000]" style={{ fontVariantNumeric: 'tabular-nums' }}>{audit.matched}</p>
              <p className="text-[10px] text-[#627085] font-bold uppercase tracking-wider">Matched</p>
            </div>
            <div>
              <p className="text-[20px] font-bold text-[#ef4444]" style={{ fontVariantNumeric: 'tabular-nums' }}>{audit.discrepancies}</p>
              <p className="text-[10px] text-[#627085] font-bold uppercase tracking-wider">Unmatched</p>
            </div>
            <div>
              <p className="text-[20px] font-bold text-[#000000]">{audit.duration}</p>
              <p className="text-[10px] text-[#627085] font-bold uppercase tracking-wider">Duration</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden mb-4 shadow-sm">
          <div className="flex justify-between items-center px-4 py-3.5 border-b border-[#f3f4f6]">
            <span className="text-[13px] text-[#627085]">Manager</span>
            <span className="text-[13px] font-bold text-[#000000]">{audit.manager}</span>
          </div>
          <div className="flex justify-between items-center px-4 py-3.5 border-b border-[#f3f4f6]">
            <span className="text-[13px] text-[#627085]">Location</span>
            <span className="text-[13px] font-bold text-[#000000]">{audit.location}</span>
          </div>
          <div className="flex justify-between items-center px-4 py-3.5">
            <span className="text-[13px] text-[#627085]">Audit ID</span>
            <span className="text-[13px] font-bold text-[#627085] font-mono">{audit.id}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 bg-white border-t border-[#e5e7eb] z-20">
        <button onClick={onViewItems} className="w-full py-4 bg-[#ef4444] text-white rounded-xl font-bold text-[15px] shadow-[0_4px_12px_rgba(239,68,68,0.25)] active:scale-[0.98] transition-transform">
          View All {audit.items} Items
        </button>
      </div>
    </motion.div>
  );
}
