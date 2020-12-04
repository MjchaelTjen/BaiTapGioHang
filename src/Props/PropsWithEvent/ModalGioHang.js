import React, { Component } from 'react'

export default class ModalGioHang extends Component {

    // renderTable = () => {

    //     const { gH } = this.props;

    //     return gH.map((spGH, index) => {
    //         return (
    //             <tr key={index}>
    //                 <td>{spGH.maSP}</td>
    //                 <td><img src={spGH.hinhAnh} width={50} height={50}></img></td>
    //                 <td>{spGH.tenSP}</td>
    //                 <td>{spGH.soLuong}</td>
    //                 <td>{spGH.giaBan}</td>
    //                 <td>{spGH.giaBan * spGH.soLuong}</td>
    //                 <td><button className="btn btn-danger">Xóa</button></td>
    //             </tr>
    //         )
    //     })
    //     // return gioHang.map((spGH, index) => {
    //     //     return <tr key={index}>
    //     //         <td>{spGH.maSp}</td>
    //     //         <td><img src={spGH.hinhAnh} width={50} height={50}></img></td>
    //     //         <td>{spGH.soLuong}</td>
    //     //         <td>{spGH.giaBan}</td>
    //     //         <td>{spGH.soLuong * spGH.giaBan}</td>
    //     //         <td></td>
    //     //     </tr>
    //     // })
    // };


    render() {

        let { gH, XGH, tggh } = this.props; // Lấy dữ liệu gioHang từ BaiTapGioHang

        // renderTable = () => {
        //     return gioHang.map((spGH, index) => {
        //         return <tr key={index}>
        //             <td>{spGH.maSp}</td>
        //             <td><img src={spGH.hinhAnh} width={50} height={50}></img></td>
        //             <td>{spGH.soLuong}</td>
        //             <td>{spGH.giaBan}</td>
        //             <td>{spGH.soLuong * spGH.giaBan}</td>
        //             <td></td>
        //         </tr>
        //     })
        // };

        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{ width: "800px" }}>
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>

                                            <td>Mã SP</td>
                                            <td>Hình ảnh</td>
                                            <td>Tên SP</td>
                                            <td>Số lượng</td>
                                            <td>Đơn giá</td>
                                            <td>Thành tiền</td>
                                            <td></td>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {gH.map((spGH, index) => {
                                            return (<tr key={index}>
                                                <td>{spGH.maSP}</td>
                                                <td><img src={spGH.hinhAnh} width={50} height={50}></img></td>
                                                <td>{spGH.tenSP}</td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => tggh(spGH.maSP, true)}>+</button>
                                                    {spGH.soLuong}
                                                    <button className="btn btn-primary" onClick={() => tggh(spGH.maSP, false)}>-</button>
                                                </td>
                                                <td>{spGH.giaBan.toLocaleString()}</td>
                                                <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
                                                <td><button onClick={() => {
                                                    XGH(spGH.maSP)
                                                }} className="btn btn-danger">Xóa</button></td>
                                            </tr>)
                                        })}
                                        {/* {renderTable()} */}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="5"></td>
                                            <td>Tổng tiền:</td>
                                            <td>{this.props.gH.reduce((tongTien, GHCHON) => { return tongTien += GHCHON.soLuong * GHCHON.giaBan }, 0)}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
