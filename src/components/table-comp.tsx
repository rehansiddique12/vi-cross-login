"use client"

import React, { useState } from "react"

interface Event {
  id: string
  title: string
  day: string
  startTime: string
  endTime: string
  type: "event" | "webinar" | "presentation" | "bbq"
}

export default function CalendarSchedule() {
  const [currentMonth] = useState("April 2024")
  const [activeView, setActiveView] = useState<"day" | "week" | "month">("week")

  // Sample events data
  const events: Event[] = [
    { id: "1", title: "Event", day: "TUE", startTime: "08:00", endTime: "09:00", type: "event" },
    { id: "2", title: "Webinars", day: "THU", startTime: "09:00", endTime: "10:00", type: "webinar" },
    { id: "3", title: "Presentations", day: "FRI", startTime: "10:30", endTime: "11:00", type: "presentation" },
    { id: "4", title: "Presentations", day: "TUE", startTime: "11:00", endTime: "12:00", type: "presentation" },
    { id: "5", title: "Webinars", day: "SUN", startTime: "08:00", endTime: "09:00", type: "webinar" },
    { id: "6", title: "BBQ", day: "THU", startTime: "12:00", endTime: "13:00", type: "bbq" },
  ]

  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
  const timeSlots = ["08:00", "09:00", "10:00", "10:30", "11:00", "12:00", "13:00"]

  // Function to get event color based on type
  const getEventColor = (type: string) => {
    switch (type) {
      case "event":
        return "bg-red-200 border-l-4 border-red-400"
      case "webinar":
        return "bg-blue-200 border-l-4 border-blue-400"
      case "presentation":
        return type === "presentation" && timeSlots.indexOf("10:30") >= 0
          ? "bg-yellow-200 border-l-4 border-yellow-400"
          : "bg-purple-200 border-l-4 border-purple-400"
      default:
        return "bg-gray-200"
    }
  }

  // Function to check if an event exists at a specific day and time
  const getEventAtDayAndTime = (day: string, time: string) => {
    return events.find(
      (event) => event.day === day && ((time >= event.startTime && time < event.endTime) || time === event.startTime),
    )
  }

  // Function to determine if this is the start time of an event
  const isEventStartTime = (day: string, time: string) => {
    return events.some((event) => event.day === day && event.startTime === time)
  }


  return (
    <div className="bg-white rounded-2xl h-1/2 w-full p-4 justify-self-center mb-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <button className="flex items-center gap-2 bg-Blue hover:bg-White hover:text-Blue hover:border text-white px-4 py-2 rounded-md">
          <span>Add Trade Booths</span>
          <span className="border border-white rounded-md w-5 h-5 flex items-center justify-center text-sm">+</span>
        </button>

        <div className="flex items-center gap-4">
          <div className="flex">
            <button
              className={`px-4 py-1 ${activeView === "day" ? "bg-Blue hover:bg-White hover:text-Blue hover:border text-white rounded-md" : "text-gray-600"}`}
              onClick={() => setActiveView("day")}
            >
              Day
            </button>
            <button
              className={`px-4 py-1 ${activeView === "week" ? "bg-Blue hover:bg-White hover:text-Blue hover:border text-white rounded-md" : "text-gray-600"}`}
              onClick={() => setActiveView("week")}
            >
              Week
            </button>
            <button
              className={`px-4 py-1 ${activeView === "month" ? "bg-Blue hover:bg-White hover:text-Blue hover:border text-white rounded-md" : "text-gray-600"}`}
              onClick={() => setActiveView("month")}
            >
              Month
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-800">{currentMonth}</span>
            <button className="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-[auto_repeat(7,1fr)] border border-gray-200 rounded-md">
        {/* Empty top-left cell */}
        <div className="border-b border-r border-gray-200"></div>

        {/* Day headers */}
        {days.map((day) => (
          <div key={day} className="p-2 text-center font-medium border-b border-r border-gray-200">
            {day}
          </div>
        ))}

        {/* Time slots and events */}
        {timeSlots.map((time) => (
          <React.Fragment key={time}>
            {/* Time label */}
            <div className="p-2 text-right pr-4 border-b border-r border-gray-200 text-gray-600">{time}</div>

            {/* Day cells */}
            {days.map((day) => {
              const event = getEventAtDayAndTime(day, time)
              const isStartTime = isEventStartTime(day, time)

              return (
                <div key={`${day}-${time}`} className="border-b border-r border-gray-200 relative h-[50px]">
                  {isStartTime && event && (
                    <div className={`absolute inset-1 pl-2 ${getEventColor(event.type)}`}>
                      <div className="text-sm font-medium">{`${event.startTime} - ${event.endTime}`}</div>
                      <div className="text-sm text-gray-700">{event.title}</div>
                    </div>
                  )}
                </div>
              )
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

