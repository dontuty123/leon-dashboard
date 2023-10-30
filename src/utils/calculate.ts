import { formatCurrency } from "./utils";




const  getStartTimeOfCurrentWeek = () => {
  const today = new Date();
  const currentDayOfWeek = today.getDay(); // Lấy ngày trong tuần (0 là Chủ Nhật, 1 là Thứ 2, 2 là Thứ 3, v.v.)
  const daysUntilMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1; // Số ngày cần trừ để đến Thứ 2
  const startTimeOfCurrentWeek = new Date(today); // Sao chép thời gian hiện tại
  startTimeOfCurrentWeek.setHours(0, 0, 0, 0); // Đặt giờ, phút, giây và mili giây thành 0
  startTimeOfCurrentWeek.setDate(today.getDate() - daysUntilMonday); // Trừ ngày để lùi về Thứ 2

  return startTimeOfCurrentWeek;
}
const currentTime = new Date().getTime();
const currentWeekStart = getStartTimeOfCurrentWeek().getTime()
const currentWeekEnd = currentTime;
const lastWeekStart = currentWeekStart - 7 * 24 * 60 * 60 * 1000;
const lastWeekEnd = currentWeekStart;


export const ratioCalculate = (data: IUser[] | IProduct[]| ITransaction[]) => {
    const currentWeekData = data?.filter(item => item.createAt >= currentWeekStart && item.createAt < currentWeekEnd);
    const lastWeekData = data?.filter(item => item.createAt >= lastWeekStart && item.createAt < lastWeekEnd);

    const tiLeTangTruong = ((currentWeekData?.length - lastWeekData?.length) / lastWeekData?.length) * 100;

    return tiLeTangTruong.toFixed(2).toString();
}

export const compareCalculate = (data: IUser[] | IProduct[]| ITransaction[]) => {
    const currentWeekData = data?.filter(item => item.createAt >= currentWeekStart && item.createAt < currentWeekEnd);
  

    return currentWeekData?.length.toString();
}

export const revanueCalculate = (data: ITransaction[]) => {
  const currentWeekData = data?.filter(item => item.createAt >= currentWeekStart && item.createAt < currentWeekEnd);
  let revanue : number = 0
  currentWeekData?.map((item) => {
      revanue += (item.quantity * item.product.price) 
  })
  return formatCurrency(revanue).toString();
}

export const ratioRevanueCalculate = (data: ITransaction[]) => {
  const currentWeekData = data?.filter(item => item.createAt >= currentWeekStart && item.createAt < currentWeekEnd);
   const lastWeekData = data?.filter(item => item.createAt >= lastWeekStart && item.createAt < lastWeekEnd);
  let curentWeekRevanue : number = 0
  currentWeekData?.map((item) => {
      curentWeekRevanue += (item.quantity * item.product.price) 
  })
   let lasetWeekRevanue : number = 0
  lastWeekData?.map((item) => {
      lasetWeekRevanue += (item.quantity * item.product.price) 
  })

  const percentGrow = ((curentWeekRevanue - lasetWeekRevanue) / lasetWeekRevanue) * 100

  return percentGrow.toFixed(2).toString();
}