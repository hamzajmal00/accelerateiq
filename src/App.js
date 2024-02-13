import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import MangerDashboard from './components/ManagmentDasboard/MangerDashboard';
import './assets/css/aos.min.css';
import './assets/css/style.css';
import './assets/css/tailwind.css';
import './assets/css/tiny-slider.css';
import CallerDashboard from './components/CallerDashboard/CallerDashboard';
import CallProcessing from './components/CallProcessing/CallProcessing';
import AddReferral from './components/AddReferral/AddReferral';
import CallOptions from './components/CallOptions/CallOptions';
import HangUp from './components/HangUp/HangUp';
import ScheduleCallback from './components/ScheduleCallback/ScheduleCallback';
import SendEmail from './components/SendEmail/SendEmail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MangerDashboard />} />
        <Route path='/caller-dashboard' element={<CallerDashboard />} />
        <Route path='/call-processing' element={<CallProcessing />} />
        <Route path='/add-referral' element={<AddReferral />} />
        <Route path='/call-options' element={<CallOptions />} />
        <Route path='/hung-up' element={<HangUp />} />
        <Route path='/schedule-callback' element={<ScheduleCallback />} />
        <Route path='/send-email' element={<SendEmail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
