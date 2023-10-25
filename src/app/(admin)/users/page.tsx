import React from "react";
import Dashboard from "@/components/Dashboard/index";
import { ICols } from "@/types/static.type";

const mockData: IUser[] = [
  {
    address: "test address",
    avatar:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAh1BMVEX///9mD2hdAF9hAGNYAFrKucuVd5dUAFZWAFjo4eibeJxkAGb7+ftSAFRlCGf39Pfy7fLs5+zk2uR1QHbg1OBOAFCoiqnBqcGmhae6obvWxtbRwNHazdqPZJCxlbLItMlpHmuET4V6SXx0N3aVcJZ/RoGFV4dyLXRuL3B4PnqznrSEW4aXbZhABSKHAAAJc0lEQVRoge1b65ajrBJtgXzg3Tje72kTEyd5/+c7pr2CSNRkzq/ea81aPUYoKIqqXQV+ff3iF7/4xS/Ww5SdOPQep0td15fTwwtjRzb/T7KtxEu/JeLqGAFoSAYECOsukb5TL7H+tXA7q4Cr61hNM/8QJbYt23YSHfwsVbGuu6DK7H8nPPFUV3eviu/wx+Yr1+Z31Uv+hXArL4Gupv5RE7ykHf1U1UGZf3ohjt5VB9/+cc2r/jfQr96aV9fC8iABZ77WeXDOgEDvYzrIAEHZtt6sDBGQfUR6DDH0tm9u02vaxW9Ll1MEFHlfUwWgdF/TAXlBrvu3U3IlRf6O+DMmgWi/vYIWYHze3dq+kut6o+fDafrY6RIPBUnfmXwLLSXFYU9DH31oA2UA+dtbhTp4y3QmyIEebm3j6eDdpR/hAN3b1iIgxQurkZNDpqRVVaXnLE9ssaHYBQm2iM/Ehm8myncBGvrRovmr+POIRR662QYbjMnXC5H4sCZQNaQpDBWSqydQglPoq40wxkgg/lgiVeLBAJKgmYPwymjQWEu0/Kv2B3KlP6FKgqgfrbRos0RLu8WSnSgEi+IlCQSRIy/ZQYjKNWE0JQ/usJzgXkKCROKbASACy3vgcAU9SPpafK7fOI2doMCAsbklGCrARcDRtXnTX7o0GaH5xo9qHa6TPYwB6vXciGyEXvGBCs8W3zmBZZNbBgSnmQ5CvRKL90nJPDG9XdLbEcx4W0mEXsAq2D0iX9CoeaPxda8AJytloAujbwcUIjcZ6Ar94DBO3mj4ZOWF+UGEPPSq5j1jVAET+xVdEAhkcqVHFw6TV1HprQ2Ijje6SINxJtaVLJugwhif34s3QBVvoeBmXIG+KUM+QqwsNHpOnxJy6PuA0nYGdTBgP3aqsbmsAGb6Ti+enPfQQO1MesOhFm5RATIE1EANtVPgXh6Wd8unGpRaAeQrIMMURXjATn2CYPgCUadBSEUURk4PrQTTcUV6p7x3cri424l4OgcZlLz1TMiJGk2r/d3Kb5GjdgUoiSfCS+lSip+EbUO0kbfO4HX9TC07xpw4rIHbxPdY7fTV07sJkHZqOyqnnd/AvNsYTY0kb2kGeT8HcNpdSCUzDzQ3qsCdPrvAud22OC7yqwW0+wjWk0exOw8CEpz0a7cbB7BU5KggXXeLcMuq2KDdxpO+LCixbx3d++R/LcmEJ+alvI2GBrhuKWucfhqBqQXeXZYo+5MM7ehd2+kzXj/uHbIEIScaWbZj25zFObQKmJbkvFkyEujD8idS6zeNKz1IsxjzDjCraiTnGyAEXNMDuzjHdjZNejJs+5hlAdrd7WdkdX5fggxX86fUm9Bjs6uOoRpNHsa6rKqLhKrRa8d07/QoLcPo/zz3YgDje6opD2RoxX3ym8oGWG/ocdCaYdALJQ8uycSDCGb5iykFh7QCU4qjMsZ1QP0PuFdyiukxRm4/2VHLbCLwQr7RctPmD1a+PcgHvdl5Lh1V/aFCogwzAYwaaf3TBpwCJCl+HB/8B0CAkS8PU4I99QiZDaCQzmi0y2DkkOlGZH+PyeaK78zAj8PA1UtndjmhSVCKur1hjkkeK5/af4skkoNRvqF2BpAgOgRW/WKb4yRZ+VP/Y2xhw6N8CXTtbERv7hM6vpb/lcPOl2/yvzz5R0T79gp1+9FUBfKb+EOa+CNtrOZN5Pd+26Lnr32jzjC0ehgAa/9dZ1vj79T+1boXg76nDnCU/3UeBsspBOzDuP9h7wDn8nuDGus7aD/xphGN/qdfOZOWP67/l+UOL3+m/PwsQPdduoOUmf0Piz24OTb+7QanR3lm/8Ni2332bpSfOUGzyr5DOAph5v9AY0rgg24Eb2ReU0Sgkw5Gn58gmtoGeEIakpPxMwAe/d2BlgAbxmmS9eSYjp++zqTerZ/7xAJYHZemci42/iUMI7/9eCEoyr60CUTyvZ/pqzfqYeDSKaBMaHvovAAS1JP/q/8MYMtcExwRvfNbVAxHswpIt2rJDhQc3vlY7QFvywvV+lOjoGcCmTJcw3/pB0GXAArKhZn7cwphQHRb9tR+l/7Ry2ux/Lfh/zRrNqVuDwpOX2WvBrreMP7lV5Ju70k0X8hnVcDZE7+rHBSiUK+ZliViInJHmdgDQHa2T41UjEbaFFiCxf6bDMei6+NCP9cqd2Yw1zlr7YpHwrMoEeyiL2GxhBRcZy9nM5X0aYO6eB4jRtgXYWc1pFyfh9YIzYoyWR+3wfd2KiJ/91EXzYSlPGohzRc66AcA4cY7ELIC+6CLZrWOYzErP3w9K+PzUpsyMhf4mCXWS9AODzhQdTTPFHK2yv+DBNXzh9l4+gARqjI/smURnMjPKoTGhGOu/K+vGnGdSs07H4ylSda34vjjeQAyaSBxqqcO4Ez06xmDeWo53tE0790CA915vkNZOAm2CsT1Zf4V7BlBkyVx5Zho6QjI4xemv8wMLRw5L0NFKON75gwvsQoLwaU46p8QWH0E+bySeFoKnBbka7lVwDLhkcO0BASB/tIBHwAgAso0XPYWIhlN8ityM5Yc+Z4ihudHwgRRlkSkMuNVxj+KdMHGWmg3TmWaghkJzx/jF8E6RjehF42QIfr5+Hjpfi7CaP0yqRWejybFS09gQCg4sZmd785gScsrIBtrvIDgwCxG0suMJnIXT6hP6w7i1WJpboW7IqMMyIX/gy2++jGCrdv3uKy7BHUi/EXK18pfSNsUwp5n8CHf5ncwnvi7Wj43awrxbSWHShDh2aC/Wj5PfzHhsw7uAHS29v5EtHr9ObHngPQN91hzBDkDuK4LwgabSTzFw20HuSEC8yVYaYBgbuUx2JpD+JizBB5ZQQEQm8g9lY833wCNdU6kygEShv+GAHBuWmZY33GIn6jkMZuJ5iv/iaCEM+epPYi66wq1XZPyzevbDeSS1DsLyVaFpHfv4OaNPeyvomUuTt/5rsZMsftWFdmpMd6vghzj+s0bBGYG0GXfDfzkgsBCDrAFdtPNjs8I5LQZ+GdOMPIC4w1fnzzhnDF+79MDZgS6W+ar8/+8dPUPSv8ZQYWJFCSvh6AlgURw9Vnpz36dR6GDWoms5TFoVqTUQC8ezvvfLXAg5xdAXPXuHXjmKB+8u+oScMnfd5qLsA6K5Oq6i+uz9zfM4yiJ4jz8651r/HwsKYd//gnel5V75xLqz8/wCMbNv0awDsuz9/GvzpZhWnKSh0HQZLxBEOaJLCwD/2IR/wOsKZZ4RnyOGwAAAABJRU5ErkJggg==",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",
    country: "america",
    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "03 Nailie, Aplobine, Melbourne",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "03 Nailie, Aplobine, Melbourne",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "03 Nailie, Aplobine, Melbourne",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "03 Nailie, Aplobine, Melbourne",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "03 Nailie, Aplobine, Melbourne",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "03 Nailie, Aplobine, Melbourne",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "03 Nailie, Aplobine, Melbourne",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "03 Nailie, Aplobine, Melbourne",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "03 Nailie, Aplobine, Melbourne",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "03 Nailie, Aplobine, Melbourne",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "03 Nailie, Aplobine, Melbourne",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "03 Nailie, Aplobine, Melbourne",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "03 Nailie, Aplobine, Melbourne",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "03 Nailie, Aplobine, Melbourne",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "03 Nailie, Aplobine, Melbourne",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "03 Nailie, Aplobine, Melbourne",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
  {
    address: "221 Nailie, New York, England",
    country: "America",
    avatar:
      "https://img.freepik.com/premium-vector/woman-gesturing-hello-with-waving-hand-avatar-illustration_619097-311.jpg",
    createAt: 123123123,
    description: "this is a test user",
    email: "testemail@gmail.com",
    name: "test name",

    phone: "0980091239",
    role: "admin",
    zipcode: "123123",
  },
];

export default function Users() {
  const collumn: ICols[] = [
    {
      field: "email",
      headerName: "Email",
      width: 300,
    },
    {
      field: "name",
      headerName: "Full Name",
      width: 120,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
    },
    {
      field: "role",
      headerName: "Role",
      width: 120,
    },
  ];

  return (
    <div>
      <Dashboard
        curCols={collumn}
        curRows={mockData}
        title="User Dashboard"
        preLink="users/edit"
      />
    </div>
  );
}
