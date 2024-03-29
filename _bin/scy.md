---
lang: bash
layout: bin
name: scy
title: Запись видео с экрана
---
{% raw %}
```bash
#!/bin/bash
export VIDEO_RECORDING_RESOLUTION='1600x900' # у меня такой экран
export VIDEO_CONVERT_RESOLUTION='1280x720' # ютуб до такого размера пожмёт всё равно. Заливать меньше

red_echo() {
	echo -e "\e[1;31m$@\e[0m"
}

green_echo() {
	echo -e "\e[1;32m$@\e[0m"
}

_required_var() {
	eval var=\$$1
	if [ -z $var ] ; then
		red_echo "  $1 not defined"
	else
		green_echo "  $1=$var"
	fi
}

_check_required_software() {
	_required_software ffmpeg
	_required_software dzen2
	_required_software dmenu-wrapper
	_required_software xc
}

_required_software() {
	if command -v $1 >/dev/null 2>&1 ; then
		green_echo "  $1 installed"
	else
		red_echo "  $1 not installed"
	fi
}

_check_required_variable() {
	_required_var "VIDEO_SAVING_PATH"
	_required_var "VIDEO_RECORDING_RESOLUTION"
	_required_var "VIDEO_CONVERT_RESOLUTION"
}

_video_process_running() {
	[ -f ~/.pid/video.pid ] && kill -0 $(cat ~/.pid/video.pid) 2> /dev/null
}

_stop_video_recording() {
	kill -INT $(cat ~/.pid/video.pid)
	_clear_pid_file
}
_clear_pid_file() {
	rm ~/.pid/video.pid
}

_ensure_we_have_directory_for_video() {
	if [ -d "$VIDEO_SAVING_PATH" ]; then
		mkdir -p "$VIDEO_SAVING_PATH"
	fi
}

_change_directory() {
	cd $VIDEO_SAVING_PATH
}

_start_recording() {
	FILENAME="$1"
	NAME=`cat $VIDEO_SAVING_PATH/*.txt | sort | uniq | ~/.bu.bin/bin/dmenu-wrapper 'Название видео' 15`
	if [ ! -n "$NAME" ] ; then
		echo "Aborted" | dzen2 -p 1 -bg "#ffffff" -fg "#000000"
		exit
	fi

	echo "$NAME" > $FILENAME.mkv.txt
	nohup \
		ffmpeg -f pulse -ac 2 -i default \
		-r 24 -s $VIDEO_RECORDING_RESOLUTION -f x11grab -i :0.0 \
		-vcodec libx264 -preset ultrafast  \
		$FILENAME.mkv &
}

_write_pid_file() {
	echo $! > ~/.pid/video.pid
}

_start_video_recording() {
	_ensure_we_have_directory_for_video
	_change_directory
	_start_recording $(date +'%Y.%m.%d-%H.%M.%S')
	_write_pid_file
}

_toggle_recording() {
	if _video_process_running ; then
		_stop_video_recording
		notify-send "_Снято_"
	else
		_start_video_recording
	fi
}
_latest_video_filename() {
	ls -t *.mkv | head -1
}
_convert_video() {
	rm ${1}_youtube.mp4 2> /dev/null
	notify-send "_Конвертирую видео"
	ffmpeg -i $LATEST \
		-acodec libvorbis \
		-ab 128k \
		-ac 2 \
		-vcodec libx264 \
		-preset medium \
		-s $VIDEO_CONVERT_RESOLUTION \
		-crf 25 \
		-threads 0 \
		${1}_youtube.mp4 2> /dev/null
}

_upload_video() {
	TITLE=$(cat $1.txt)
	FILE="${1}_youtube.mp4"
	notify-send "_Загружаю видео на youtube.com_"
	youtube-upload \
		--privacy=unlisted \
    --auth-browser \
    --credentials-file=/home/bubujka/.youtube-credential.json \
		--description=" " \
    --title="$TITLE" "$FILE" | echo "http://youtu.be/"$(cat -) | xc >> ~/.db/wiki/screencasts-$(hostname)
	xclip -o
	notify-send "_Видео загружено._"
}

case "$1" in
	record)
		_toggle_recording
		;;
	upload)
		_change_directory
		LATEST=$(_latest_video_filename)
		_convert_video "$LATEST"
		_upload_video "$LATEST"
		;;
	stahp)
		killall -KILL ffmpeg
		;;
	check)
		echo "Checking required variable:"
		_check_required_variable
		echo "Checking required software:"
		_check_required_software
		;;

	*)
		echo "Usage: scy <command> [options]"
		;;
esac
# vim: tabstop=4:softtabstop=4:shiftwidth=4:noexpandtab
```
{% endraw %}