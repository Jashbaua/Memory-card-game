/* eslint-disable react/prop-types */
export default function Card({ id, gifUrl, onClick }) {
    return <div id={id} className="card" onClick={onClick}>
        <img src={gifUrl} alt='gif' />
    </div>
}