// RoleSelector.jsx
import React from 'react';

const RoleSelector = ({ selectedRole, onChange }) => {
  return (
    <div className="role-selector">
      <select
        value={selectedRole}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="Directivo">Directivo</option>
        <option value="Coach">Coach</option>
        <option value="Colaborador">Colaborador</option>
      </select>
    </div>
  );
};

export default RoleSelector;
