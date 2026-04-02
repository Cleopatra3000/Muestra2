import { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import AgeGate from './components/common/AgeGate/AgeGate'
import {
  getStoredAgeGateStatus,
  setStoredAgeGateStatus,
} from './components/common/AgeGate/ageGateStorage'
import Layout from './layout/Layout'
import Landing from './pages/Landing/Landing'
import CookiesPage from './pages/Legal/CookiesPage'
import LegalNoticePage from './pages/Legal/LegalNoticePage'
import PrivacyPage from './pages/Legal/PrivacyPage'

const AppContent = ({ ageGateStatus, onAccept, onReject }) => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      {isHome && ageGateStatus !== 'accepted' && (
        <AgeGate status={ageGateStatus} onAccept={onAccept} onReject={onReject} />
      )}

      <Layout>
        <Routes>
          <Route path="/" element={ageGateStatus === 'accepted' ? <Landing /> : null} />
          <Route path="/aviso-legal" element={<LegalNoticePage />} />
          <Route path="/privacidad" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Routes>
      </Layout>
    </>
  )
}

const App = () => {
  const [ageGateStatus, setAgeGateStatus] = useState(() => getStoredAgeGateStatus())

  const handleAcceptAgeGate = () => {
    setStoredAgeGateStatus('accepted')
    setAgeGateStatus('accepted')
  }

  const handleRejectAgeGate = () => {
    setStoredAgeGateStatus('denied')
    setAgeGateStatus('denied')
  }

  return (
    <BrowserRouter>
      <AppContent
        ageGateStatus={ageGateStatus}
        onAccept={handleAcceptAgeGate}
        onReject={handleRejectAgeGate}
      />
    </BrowserRouter>
  )
}

export default App
