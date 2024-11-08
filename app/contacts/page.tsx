"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const contactData = [
  { name: 'Hostel Warden', phone: '+91 1234567890'},
  { name: 'Hostel Secretory', phone: '+91 1234567890'},
  { name: 'Mess Manager', phone: '+91 9876543210'},
  { name: 'Maintenance Team', phone: '+91 1122334455'},
  { name: 'Emergency Helpline', phone: '112'},
  { name: 'Student Affairs Office', phone: '+91 2233445566'},
];

export default function ImportantContacts() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-gray-100 to-white">
      <Navbar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h2 className="text-4xl font-bold text-indigo-700 mb-2">Important Contacts</h2>
            <p className="text-lg text-gray-600">Keep these contacts handy for any assistance you may need.</p>
          </header>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-indigo-600 text-white text-lg font-semibold">
                  <th className="p-4 uppercase tracking-wider">Name</th>
                  <th className="p-4 uppercase tracking-wider">Phone</th>
                </tr>
              </thead>
              <tbody>
                {contactData.map((contact, index) => (
                  <tr
                    key={index}
                    className={`text-center text-gray-700 hover:bg-indigo-50 transition duration-200 ease-in-out ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <td className="p-4 font-semibold text-indigo-800 border-b border-gray-200">{contact.name}</td>
                    <td className="p-4 border-b border-gray-200">{contact.phone}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
