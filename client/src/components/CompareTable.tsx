import './CompareTable.css';
const tableData = [
    {
        label: "隐私性",
        sub: "侵入程度",
        cols: [
            { value: "高", sub: "无视觉画面" },
            { value: "低", sub: "完整视频流", danger: true },
            { value: "高", sub: "仅热力图" },
            { value: "高", sub: "隐私安全画面", highlight: true },
        ],
    },
    {
        label: "误报率",
        sub: "准确性",
        cols: [
            { value: "中", sub: "易受风扇/窗帘干扰", warn: true },
            { value: "低", sub: "高精度" },
            { value: "高", sub: "易受阳光/宠物触发", danger: true },
            { value: "极低", sub: "双重验证", highlight: true },
        ],
    },
    {
        label: "验证能力",
        sub: "事件确认",
        cols: [
            { value: "无", sub: "仅盲报", danger: true },
            { value: "清晰", sub: "视频回放" },
            { value: "无", sub: "无画面", danger: true },
            { value: "视觉 + 数据", sub: "隐私红外回放", highlight: true },
        ],
    },
    {
        label: "抗干扰性",
        sub: "稳定性",
        cols: [
            { value: "中", sub: "微小动作干扰", warn: true },
            { value: "中", sub: "光线/阴影敏感", warn: true },
            { value: "低", sub: "温度/气流敏感", danger: true },
            { value: "高", sub: "交叉验证", highlight: true },
        ],
    },
];

export default function CompareTable() {
    return (
        <div className="comp-table-container">
            <table className="comp-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            传统雷达<br />
                            <span className="comp-head-sub">(Pontosense)</span>
                        </th>
                        <th>
                            传统摄像头<br />
                            <span className="comp-head-sub">(海康威视/萤石)</span>
                        </th>
                        <th>
                            纯红外传感器<br />
                            <span className="comp-head-sub">(被动红外)</span>
                        </th>
                        <th className="highlight-col">
                            <div className="bop-badge">BOP 之选</div>
                            <br />
                            BOP 双重融合
                            <br />
                            <span className="comp-head-sub">(雷达 + 红外 + AI)</span>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {tableData.map((row, idx) => (
                        <tr key={idx}>
                            <td>
                                <strong>{row.label}</strong>
                                <br />
                                <span className="comp-sub">({row.sub})</span>
                            </td>

                            {row.cols.map((col, cIdx) => (
                                <td
                                    key={cIdx}
                                    className={col.highlight ? "highlight-col" : ""}
                                >
                                    <div className="cell-content">
                                        <div>
                                            <span
                                                className={`comp-value 
                          ${col.danger ? "danger" : ""} 
                          ${col.warn ? "warn" : ""}`}
                                            >
                                                {col.value}
                                            </span>
                                            <span className="comp-sub">{col.sub}</span>
                                        </div>

                                        {col.highlight && (
                                            // <i className="fas fa-check-circle check-icon"></i>
                                            <div className="fas fa-check-circle check-icon w-6 h-6 bg-[#26B6D4] rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}