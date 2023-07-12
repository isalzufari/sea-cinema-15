import React, { useState, useEffect } from 'react'
import { toRupiah, convertDate } from '../../utils'
import api from '../../utils/api'

const Balance = ({ authUser, setauthUser, showToast }) => {
  const [amount, setAmount] = useState(0);
  const [handle, setHandle] = useState(true);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    refreshBalance();
  }, []);

  const refreshBalance = async () => {
    const { amount: refreshBalance, history } = await api.getBalance();
    const refreshUser = { ...authUser, balance: refreshBalance }
    setauthUser(refreshUser);
    setHistory(history);
    console.log(history);
  }

  const handleTopUp = async ({ amount }) => {
    const topup = await api.topUpBalance({ amount });
    const { status, message } = topup;
    if (status === 'success') {
      showToast(message)
      await refreshBalance();
      setAmount('0');
    } else {
      showToast(message);
    }
  }

  const handleWithdraw = async () => {
    const withdraw = await api.withdrawBalance({ amount });
    const { status, message } = withdraw;
    if (status === 'success') {
      showToast(message)
      await refreshBalance();
      setAmount('0');
    } else {
      showToast(message);
    }
  }

  return (
    <>
      <div className='row'>
        <div className="col-4">
          <div className="card p-3">
            <div className="d-flex justify-content-between">
              <div>
                <h1 className='h5'>total balance</h1>
                <small class="badge text-bg-danger">{toRupiah(authUser.balance)}</small>
              </div>
              <button onClick={() => { setHandle(false) }} className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#setAmount">top up</button>
            </div>
            <hr />
            <button onClick={() => { setHandle(true) }} className='btn btn-primary mb-3' data-bs-toggle="modal" data-bs-target="#setAmount">withdraw</button>
            <small className='text-muted'>Info: The maximum
              amount that can be withdrawn is min {toRupiah(500000)}</small>
          </div>
        </div>
        <div className="col">
          <div className="card p-3">
            <h1 className='h5'>history balance</h1>
            <hr />
            {history.map((h, key) => (
              <div key={key} className="card mb-2">
                <div className="card-body">
                  <h6>{convertDate(h.createdAt)}</h6>
                  <div className="d-flex justify-content-between">
                    <h6>{h.status[0].toUpperCase() + h.status.slice(1)}</h6>
                    <h6 style={{ color: `${h.status === 'topup' ? 'green' : 'red'}` }}>{h.status === 'topup' ? '+ ' : '- '}{toRupiah(h.amount)}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}

      <div class="modal fade" id="setAmount" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">set amount</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" class="form-control" id="floatingInput" placeholder="0" />
                <label for="floatingInput">Rp</label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button hidden={handle} onClick={() => handleTopUp({ amount })} disabled={!amount} type="button" class="btn btn-primary">topup</button>
              <button hidden={!handle} onClick={() => handleWithdraw({ amount })} disabled={!amount} type="button" class="btn btn-primary">withdraw</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Balance