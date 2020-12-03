import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {
    render() {
        const { sP, TGH } = this.props;
        return (

            <div className="card text-white bg-dark">
                <img className="card-img-top" src={sP.hinhAnh} alt={sP.hinhAnh} width={200} height={300} />
                <div className="card-body">
                    <h4 className="card-title">Tên SP: {sP.tenSP}</h4>
                    <h5 className="card-title">Mã SP: {sP.maSP}</h5>
                    <button className="btn btn-danger" onClick={() => TGH(sP)}>Thêm giỏ hàng</button>                </div>
            </div>


        )
    }
}
