import React, { useState } from 'react';

const TabContent = ({ tabIndex, tabName }) => {
    const [partnerName, setPartnerName] = useState('');
    const [partnerVorname, setPartnerVorname] = useState('');
    const [mitDebitkarte, setMitDebitkarte] = useState(false);
    const [mitKreditkarte, setMitKreditkarte] = useState(false);
    const [anzahlSparkonten, setAnzahlSparkonten] = useState(1);
    const [environment, setEnvironment] = useState('uniform');
    const [response, setResponse] = useState('');
    const [showResponse, setShowResponse] = useState(false);

    function getSparkontoOptions(tabIndex) {
        switch (tabIndex) {
            case 0: return [1, 2, 3];       // Bankpaket Basic
            case 1: return [1, 2, 3, 4, 5]; // Bankpaket Plus
            case 2: return [1, 2];          // Bankpaket Zero
            case 3: return [1, 2, 3, 4, 5]; // Bankpaket Young
            default: return [1];
        }
    }

    async function switchBankpaket(tabNr, data) {
        switch (tabNr) {
            case 0:
                console.log('Bankpaket Basic');
                await bankpaketBasic(data);
                break;
            case 1:
                console.log('Bankpaket Plus');
                await bankpaketPlus(data);
                break;
            case 2:
                console.log('Bankpaket Zero');
                await bankpaketZero(data);
                break;
            case 3:
                console.log('Bankpaket Young');
                await bankpaketYoung(data);
                break;
            default:
                console.error('Error: tabNr kann keinem Bankpaket zugeordnet werden!');
        }
    }

    async function bankpaketBasic(data) {
        fetch("http://localhost:3001/bankpaket-basic", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                const responseField = JSON.stringify(result, null, 2);
                setResponse(responseField);
                setShowResponse(true);
            })
            .catch(error => {
                console.error("Fehler beim Senden an /bankpaket-basic:", error);
                setResponse(`Fehler beim Senden an /bankpaket-basic: ${error.toString()}`);
                setShowResponse(true);
            });
    }

    async function bankpaketPlus(data) {
        fetch("http://localhost:3001/bankpaket-plus", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                const responseField = JSON.stringify(result, null, 2);
                setResponse(responseField);
                setShowResponse(true);
            })
            .catch(error => {
                console.error("Fehler beim Senden an /bankpaket-plus:", error);
                setResponse(`Fehler beim Senden an /bankpaket-plus: ${error.toString()}`);
                setShowResponse(true);
            });
    }

    async function bankpaketZero(data) {
        fetch("http://localhost:3001/bankpaket-zero", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                const responseField = JSON.stringify(result, null, 2);
                setResponse(responseField);
                setShowResponse(true);
            })
            .catch(error => {
                console.error("Fehler beim Senden an /bankpaket-zero:", error);
                setResponse(`Fehler beim Senden an /bankpaket-zero: ${error.toString()}`);
                setShowResponse(true);
            });
    }

    async function bankpaketYoung(data) {
        fetch("http://localhost:3001/bankpaket-young", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                const responseField = JSON.stringify(result, null, 2);
                setResponse(responseField);
                setShowResponse(true);
            })
            .catch(error => {
                console.error("Fehler beim Senden an /bankpaket-young:", error);
                setResponse(`Fehler beim Senden an /bankpaket-young: ${error.toString()}`);
                setShowResponse(true);
            });
    }

    const handleSubmit = async () => {
        const data = {
            tabIndex,
            tabName,
            partnerName,
            partnerVorname,
            mitDebitkarte,
            mitKreditkarte,
            anzahlSparkonten,
            environment
        };

        await switchBankpaket(tabIndex, data);
    };

    return (
        <div className="tab-content">
            <input
                type="text"
                placeholder="Partner Name"
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Partner Vorname"
                value={partnerVorname}
                onChange={(e) => setPartnerVorname(e.target.value)}
            />
            <label>
                Debitkarte
                <input
                    type="checkbox"
                    checked={mitDebitkarte}
                    onChange={(e) => setMitDebitkarte(e.target.checked)}
                />
            </label>
            <label>
                Kreditkarte
                <input
                    type="checkbox"
                    checked={mitKreditkarte}
                    onChange={(e) => setMitKreditkarte(e.target.checked)}
                />
            </label>
            <select value={anzahlSparkonten} onChange={(e) => setAnzahlSparkonten(parseInt(e.target.value))}>
                {getSparkontoOptions(tabIndex).map(num => (
                    <option key={num} value={num}>
                        {num} {num === 1 ? 'Sparkonto' : 'Sparkonten'}
                    </option>
                ))}
            </select>
            <select
                value={environment}
                onChange={(e) => setEnvironment(e.target.value)}
            >
                <option value="echo">echo</option>
                <option value="uniform">uniform</option>
                <option value="zulu">zulu</option>
            </select>
            <button onClick={handleSubmit}>Partner erstellen</button>

            {showResponse && (
                <textarea
                    className="response-field"
                    value={response}
                    readOnly
                    placeholder="Hier wird die Response angezeigt..."
                />
            )}
        </div>
    );
};

export default TabContent;