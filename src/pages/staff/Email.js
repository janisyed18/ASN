// src/pages/staff/StaffMail.js
import React from "react";

export default function StaffMail() {
  return (
    // Container fills the available space
    <div className="w-full h-full">
      <iframe
        src="https://outlook.office.com/mail/inbox"
        title="Outlook Mail"
        className="w-full h-full border-none"
      />
    </div>
  );
}
