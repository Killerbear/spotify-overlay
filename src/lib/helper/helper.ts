class Helper {
	public formatMilliseconds(milliseconds: number): string {
		const totalSeconds = Math.floor(milliseconds / 1000);
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;
		return `${String(minutes)}:${String(seconds).padStart(2, "0")}`;
	}
}

export { Helper };
