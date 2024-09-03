import React from "react";
import Card from "./Card";
const cards =[
    {
      title: "EARNINGS (MONTHLY)",
      amount: '$40,000',
      theme: 'primary',
      icon: 'calendar'
    },
    {
      title: "EARNINGS (ANNUAL)",
      amount: '$215,000',
      theme: 'success',
      icon: 'dollar-sign'
    },
    {
      title: "TASKS",
      amount: '50%',
      theme: 'info',
      icon: 'clipboard-list'
    },
    {
      title: "PENDING REQUESTS",
      amount: 18,
      theme: 'warning',
      icon: 'comments'
    },
  ]
function Dashboard() {
  return (
    <>
   
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>

      <div class="row">
        {cards.map((card) => {
          return <Card data={card} />;
        })}
      </div>
    
    </>
  );
}

export default Dashboard;