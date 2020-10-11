import { axiosPost } from "@/service/http";

const calendar = {
  getDayData(date) {
    return new Promise((resolve, reject) => {
      axiosPost({
        url: "/api/calendar/day",
        data: { date },
        success(data) {
          resolve(data);
        },
        error(err) {
          reject(err);
        },
      });
    });
  },
  getMonthData(month) {
    return new Promise((resolve, reject) => {
      axiosPost({
        url: "/api/calendar/month",
        data: {
          "year-month": month,
        },
        success(data) {
          resolve(data);
        },
        error(err) {
          reject(err);
        },
      });
    });
  },
  getYearData(year) {
    return new Promise((resolve, reject) => {
      axiosPost({
        url: "/api/calendar/year",
        data: {
          year: year,
        },
        success(data) {
          resolve(data);
        },
        error(err) {
          reject(err);
        },
      });
    });
  },
};

export default calendar;
