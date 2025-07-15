document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('estimation-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const model = {
            scriptCount: parseInt(document.getElementById('script-count').value),
            minLines: parseInt(document.getElementById('min-lines').value),
            maxLines: parseInt(document.getElementById('max-lines').value),
            person1Avg: parseInt(document.getElementById('person1-avg').value),
            person2Avg: parseInt(document.getElementById('person2-avg').value) || 0,
            startDate: new Date(document.getElementById('start-date').value),
            dueDate: new Date(document.getElementById('due-date').value)
        };

        const controller = {
            calculateAverageLines: () => (model.minLines + model.maxLines) / 2,

            calculateTotalLines: () => controller.calculateAverageLines() * model.scriptCount,

            calculateCombinedDailyRate: () => model.person1Avg + model.person2Avg,

            calculateDaysRequired: () => {
                const totalLines = controller.calculateTotalLines();
                const combinedRate = controller.calculateCombinedDailyRate();
                return Math.ceil(totalLines / combinedRate);
            },

            calculateEndDate: () => {
                let endDate = new Date(model.startDate.getTime());
                let days = controller.calculateDaysRequired();
                let addedDays = 0;
                while (addedDays < days) {
                    endDate.setDate(endDate.getDate() + 1);
                    if (endDate.getDay() !== 0 && endDate.getDay() !== 6) {
                        addedDays++;
                    }
                }
                return endDate;
            },

            validateDueDate: (calculatedEndDate) => model.dueDate >= calculatedEndDate,

            updateView: () => {
                const calculatedEndDate = controller.calculateEndDate();
                const validation = controller.validateDueDate(calculatedEndDate);
                const daysRequired = controller.calculateDaysRequired();

                document.getElementById('total-days').textContent = daysRequired;
                document.getElementById('estimation-date').textContent = new Date().toLocaleDateString();
                document.getElementById('calculated-due-date').textContent = calculatedEndDate.toLocaleDateString();
                document.getElementById('recommended-due-date').textContent = calculatedEndDate.toLocaleDateString();
                document.getElementById('due-date-validation').textContent = validation ? 'La fecha es adecuada' : 'La fecha no es adecuada';

                controller.createGanttChart(calculatedEndDate);
            },

            createGanttChart: (calculatedEndDate) => {
                gantt.config.scale_unit = "day";
                gantt.config.date_scale = "%d %M";
                gantt.init("gantt-chart");

                const tasks = [];
                let currentDate = new Date(model.startDate.getTime());
                const daysRequired = controller.calculateDaysRequired();

                for (let i = 0; i < daysRequired; i++) {
                    tasks.push({
                        id: i + 1,
                        text: `Día ${i + 1}`,
                        start_date: new Date(currentDate),
                        duration: 1,
                        progress: 1
                    });

                    currentDate.setDate(currentDate.getDate() + 1);
                    while (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
                        currentDate.setDate(currentDate.getDate() + 1);
                    }
                }

                gantt.parse({ data: tasks });
            }
        };

        controller.updateView();
    });
});
