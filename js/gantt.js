document.addEventListener('DOMContentLoaded', () => {
    const ganttData = JSON.parse(localStorage.getItem('ganttData'));

    if (ganttData) {
        gantt.config.scale_unit = "day";
        gantt.config.date_scale = "%d %M";
        gantt.init("gantt-chart");
        gantt.parse(ganttData);
    }
});
