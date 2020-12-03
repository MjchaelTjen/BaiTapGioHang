import React, { Component } from 'react'
import DanhSachSanPhamGioHang from './DanhSachSanPhamGioHang'
import ModalGioHang from './ModalGioHang'
import ProductList from "../Data/ProductList.json"
export default class BaiTapGioHang extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gioHang: []
        }
    }


    // Lấy dữ liệu tại component BaiTapGioHang
    themGioHang = (sanPhanChon) => {
        //B1 từ sản phẩm chọn
        let spGioHang = {
            maSP: sanPhanChon.maSP,
            tenSP: sanPhanChon.tenSP,
            giaBan: sanPhanChon.giaBan,
            hinhAnh: sanPhanChon.hinhAnh,
            soLuong: 1
        }
        // kiểm tra sản phẩm có trong giỏ hàng chưa
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP);
        if (index !== -1) {
            // Sản phẩm được click đã có trong this.state.gioHang
            gioHangCapNhat[index].soLuong += 1;
        } else {
            // Sản phẩm được click chưa có trong this.star.gioHang
            gioHangCapNhat.push(spGioHang);
        }
        // set state để gioHang render lại
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    // Đặt sự kiện xóa giỏ hàng tại BaiTapGioHang
    xoaGioHang = (maSP) => {
        // Tìm trong giỏ hàng có chứa maSP được click
        // var gioHangUPdate = [...this.state.gioHang];
        // let i = gioHangUPdate.findIndex(sp => sp.maSP === maSP);
        // if (i !== -1) {
        //     gioHangUPdate.splice(i, 1);
        // }
        var gioHangUPdate = this.state.gioHang.filter(sp => sp.maSP !== maSP);
        // Cập nhật lại state giỏ hàng và render ra giao diện
        this.setState({
            gioHang: gioHangUPdate
        })
    }

    tangGiamGioHang = (maSp, upDown) => {
        var gioHangTangGiam = [...this.state.gioHang];
        let index = gioHangTangGiam.findIndex(sp => sp.maSP === maSp);

        if (upDown) {
            gioHangTangGiam[index].soLuong += 1;
        } else {
            if (gioHangTangGiam[index].soLuong > 1) {
                gioHangTangGiam[index].soLuong -= 1;
            }

        }
        // cập nhật lại giá trị và render lai giỏ hàng
        this.setState({
            gioHang: gioHangTangGiam
        })

    }

    render() {

        const tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
            return tsl += spGH.soLuong;
        }, 0)

        return (
            <div className="container">
                <h3 className="text-center text-success">Bài Tập Giỏ Hàng</h3>
                <ModalGioHang tggh={this.tangGiamGioHang} XGH={this.xoaGioHang} gH={this.state.gioHang} />
                <div data-toggle="modal" data-target="#modelId" className="text-right"> <span className="text-danger" style={{ cursor: "pointer", fontSize: "18px", fontWeight: "bold" }} >Giỏ hàng( {tongSoLuong} )</span> </div>
                <DanhSachSanPhamGioHang tgh={this.themGioHang} mangSanPham={ProductList} />
            </div>
        )
    }
}
