import React, { useState } from 'react';

function PatientForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: '', age: '', gender: 'Male', phone: '',
    address: '', visitType: 'OP', reason: ''
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: '', age: '', gender: 'Male', phone: '', address: '', visitType: 'OP', reason: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl bg-white p-6 rounded-lg shadow">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input name="name" value={form.name} onChange={handleChange} required
            className="w-full border rounded-lg px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Age</label>
          <input name="age" type="number" value={form.age} onChange={handleChange} required
            className="w-full border rounded-lg px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Gender</label>
          <select name="gender" value={form.gender} onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} required
            className="w-full border rounded-lg px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Visit Type</label>
          <select name="visitType" value={form.visitType} onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2">
            <option value="OP">Outpatient</option>
            <option value="IP">Inpatient</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Address</label>
          <input name="address" value={form.address} onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2" />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Reason for Visit</label>
          <textarea name="reason" value={form.reason} onChange={handleChange} rows="3"
            className="w-full border rounded-lg px-3 py-2" />
        </div>
      </div>

      <button type="submit" className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Register Patient
      </button>
    </form>
  );
}

export default PatientForm;``